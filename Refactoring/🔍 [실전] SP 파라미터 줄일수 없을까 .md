### 문제
프로시저를 호출하기 위한 파라미터 때문에 코드가 너무 길다 줄 일 수 없을까??

~~~ java
    /**
	 * 포인트 > 포인트 지급 (선.후불 공통)
	 */
	@Override
	public void givePoint(HttpSession session, Map<String, Object> commandMap) throws Exception {

		UserInfo userInfo = (UserInfo) session.getAttribute("userInfo");

		// 유효성 검사
		chkPointValid(userInfo, commandMap);

		// 포인트 지급 (선.후불 공통)
		JSONArray giveList = (JSONArray)commandMap.get("applyInfoArr");
		giveList.stream()	// TODO Json Array로 받기, usrInfoSeqNo + '_' + applyPnt
			.forEach(item -> {
				try {
					JSONObject giveInfo = (JSONObject) item;

					// 마스터 업체 포인트 차감 처리	(업체 마스터 용 ParamMap)
					Map<String, Object> masterParamMap = new HashMap<String, Object>();
					masterParamMap.put("corpInfoSeqNo", userInfo.getCorpInfoSeqNo());
					masterParamMap.put("usrInfoSeqNo", userInfo.getUsrInfoSeqNo());
					masterParamMap.put("pMemo", "");
					masterParamMap.put("pntSct", StringUtil.getString(commandMap.get("pntSct")));
					masterParamMap.put("confYn", "Y");		// TODO 업체마스터 바로 승인 맞는지 확인
					masterParamMap.put("usrId", userInfo.getUsrId());
					masterParamMap.put("pFlag", "Y");		// 업체마스터 이전 이력 데이터 USE_YN = 'N'처리방지용 Flag
					masterParamMap.put("fillPnt", giveInfo.get("fillPnt"));
					masterParamMap.put("fillSct", Const.FILL_SCT_01);
					masterParamMap.put("reqSct", Const.REQ_SCT_02); // 요청구분 : 차감처리(RS0002)

					defaultDAO.select("point.PointMapper.updateUserPoint", masterParamMap);
					final int msInsertKey = StringUtil.getInt(commandMap.get("result"));
					if(msInsertKey < 1) throw new Exception("[업체 마스터 포인트 차감 처리 오류] - resultCD: " + msInsertKey + " - SpName: + SP_SET_CORP_USR_POINT_INSERT" + " - param: " + masterParamMap.toString());

					// 회원 포인트 지급 처리
					commandMap.put("usrInfoSeqNo", giveInfo.get("usrInfoSeqNo"));
					commandMap.put("fillPnt", giveInfo.get("fillPnt"));
					commandMap.put("morcUsrNm", "");
					defaultDAO.select("point.PointMapper.updateUserPoint", commandMap);
					final int usInsertKey = StringUtil.getInt(commandMap.get("result"));
					if(usInsertKey < 1) throw new Exception("[회원 포인트 지급 처리 오류] - resultCD: " + usInsertKey + " - SpName: + SP_SET_CORP_USR_POINT_INSERT" + " - param: " + commandMap);

					// 업체 충전 관계 추가
					commandMap.put("uprCorpFillHistSeqNo", msInsertKey);
					commandMap.put("lwstCorpFillHistSeqNo", usInsertKey);
					defaultDAO.insert("point.PointMapper.insertCorpFillRel", commandMap);
				} catch (Exception e) {
					throw new RuntimeException("포인트 지급 오류 ::: cause: " + e);
				}
			});

	}
~~~


### 해결방법
