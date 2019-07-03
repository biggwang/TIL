### 스프링 MVC HandlerMethodArgumentResolver
- 스프링 MVC 핸들러 메소드의 매개변수로 받을 수 있는 객체를 확장하고 싶을 때 사용하는 인터페이스
- https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/method/support/HandlerMethodArgumentResolver.html



~~~ java
@GetMapping("/posts/{id}")
public String getAPost(@PathVariable(“id”) Post post) {
    return post.getTitle();
}
~~~ 




~~~ java
@Runwith(SpringRunner.class)
@SpringBootTest // 이렇게 하면 main > resources 패키지안에 application.yml 파일에 내용이 불러오지만
@AutoConfigurationMockMvc
@ActiveProfiles("test")   // test > resources 패키지안에 application-test.yml 오버라이드 하면 test용 yml을 불러올수 있다.
public class PostControllerTest {
  
    @Autowired
    private MockMvc mockMvc;
    
    @Autowired
    private PostRepository postRepository;
        
    @Test
    public void getPost() throws Exception() {
        mockMvc.perform(get("/post/1" + post.getPostId()))
                  .andDo(print())
                  .andExpect(status().isOk())
                  .andExpect(content().string("jpa"))
                  ;
    
    }
~~~

~~~ java
    @Test
    public void getPost() throws Exception() {
        Post post = new Post();
        post.setTitle("jpa");
        postRepository.save(post);
        
        mockMvc.perform(get("/posts)
                      .param("page", "0)
                      .param("size", "10")
                      .param("sort", "created,desc")
                      .param("sort", "title"))
                  .andDo(print())
                  .andExpect(status().isOk())
                  .andExpect(content().string("jpa"))
                  .andExpect(jsonPath("$.content[0].title", is("jpa")))
                  ;
    
    }
}
~~~
