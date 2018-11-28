## git 명령어: 특정 stash에 있는 파일과 diff 하기

### $ git checkout -p stash@{index} filepath

### 결과

~~~ java
diff --git b/src/main/java/com/coopnc/migrator/event/AdminEventListener.java a/src/main/java/com/coopnc/migrator/event/AdminEventListener.java
index 9e37d86..8262ca6 100644
--- b/src/main/java/com/coopnc/migrator/event/AdminEventListener.java
+++ a/src/main/java/com/coopnc/migrator/event/AdminEventListener.java
@@ -13,6 +13,7 @@ import org.quartz.JobDataMap;
 import org.quartz.JobDetail;
 import org.quartz.JobKey;
 import org.quartz.Scheduler;
+import org.quartz.SimpleScheduleBuilder;
 import org.quartz.Trigger;
 import org.quartz.Trigger.TriggerState;
 import org.quartz.TriggerBuilder;
 
Apply this hunk to index and worktree [y,n,q,a,d,/,e,?]? y // stash에 있는 내용으로 바뀜
<stdin>:9: trailing whitespace.
import org.quartz.SimpleScheduleBuilder;
warning: 1 line adds whitespace errors.
<stdin>:9: trailing whitespace.
import org.quartz.SimpleScheduleBuilder;
warning: 1 line adds whitespace errors.
~~~
