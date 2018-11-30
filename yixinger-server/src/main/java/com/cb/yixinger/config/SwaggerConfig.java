package com.cb.yixinger.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 13:17
 **/
@Configuration
@EnableSwagger2
public class SwaggerConfig {
    /**
     * SpringBoot默认已经将classpath:/META-INF/resources/和classpath:/META-INF/resources/webjars/映射
     * 所以该方法不需要重写，如果在SpringMVC中，可能需要重写定义（我没有尝试）
     * 重写该方法需要 extends WebMvcConfigurerAdapter
     */
//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("swagger-ui.html")
//                .addResourceLocations("classpath:/META-INF/resources/");
//
//        registry.addResourceHandler("/webjars/**")
//                .addResourceLocations("classpath:/META-INF/resources/webjars/");
//    }


//    @Bean
//    public Docket createRestApi() {
//        Predicate<RequestHandler> predicate = new Predicate<RequestHandler>() {
//            @Override
//            public boolean apply(RequestHandler input) {
//                Class<?> declaringClass = input.declaringClass();
//                // 排除
//                if (declaringClass == BasicErrorController.class)
//                {
//                    return false;
//                }
//                // 被注解的类
//                if(declaringClass.isAnnotationPresent(RestController.class))
//                {
//                    return true;
//                }
//                // 被注解的方法
//                if(input.isAnnotatedWith(ResponseBody.class))
//                {
//                    return true;
//                }
//                return false;
//            }
//        };
//        return new Docket(DocumentationType.SWAGGER_2)
//                .apiInfo(apiInfo())
//                .useDefaultResponseMessages(false)
//                .select()
//                .apis(predicate)
//                .build();
//    }
    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                //为当前包路径
                .apis(RequestHandlerSelectors.basePackage("com.cb.yixinger.controller"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                //大标题
                .title("易行ER API接口")
                //描述
                .description("易行ERAPI接口")
                //版本
                .version("1.0.0")
                .build();
    }
}
