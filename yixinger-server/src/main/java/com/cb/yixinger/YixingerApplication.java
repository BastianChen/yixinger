package com.cb.yixinger;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import tk.mybatis.spring.annotation.MapperScan;

@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
@MapperScan("com.cb.yixinger.dao")
public class YixingerApplication {

    public static void main(String[] args) {
        SpringApplication.run(YixingerApplication.class, args);
    }
}
