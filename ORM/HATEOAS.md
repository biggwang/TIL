~~~ java
@GetMapping("/posts")
public PagedResources<Resource<Post>> getPosts(Pageable pageable, PagedResourcesAssembler<Post> assembler) {
    return assembler.toResource(findAll(pageable));
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
