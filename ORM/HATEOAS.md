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
        createPost();
        
        mockMvc.perform(get("/posts)
                      .param("page", "0)
                      .param("size", "10")
                      .param("sort", "created,desc")
                      .param("sort", "title"))
                  .andDo(print())
                  .andExpect(status().isOk())
                  .andExpect(jsonPath("$.content[0].title", is("jpa")))
                  ;
    
    }
    
    private void createPosts() {
        int postsCount = 100;
        while(postsCount > 0) {
            Post post = new Post();
            post.setTitle("jpa");
            postRepository.save(post);
            postsCount--;
        }
    }
}
~~~

### HATEOS 결과
~~~
{  
   "_embedded":{  
      "postList":[  
         {  
            "id":140,
            "title":"jpa",
            "created":null
         },
...
         {  
            "id":109,
            "title":"jpa",
            "created":null
         }
      ]
   },
   "_links":{  
      "first":{  
         "href":"http://localhost/posts?page=0&size=10&sort=created,desc&sort=title,asc"
      },
      "prev":{  
         "href":"http://localhost/posts?page=1&size=10&sort=created,desc&sort=title,asc"
      },
      "self":{  
         "href":"http://localhost/posts?page=2&size=10&sort=created,desc&sort=title,asc"
      },
      "next":{  
         "href":"http://localhost/posts?page=3&size=10&sort=created,desc&sort=title,asc"
      },
      "last":{  
         "href":"http://localhost/posts?page=19&size=10&sort=created,desc&sort=title,asc"
      }
   },
   "page":{  
      "size":10,
      "totalElements":200,
      "totalPages":20,
      "number":2
   }
}

~~~
