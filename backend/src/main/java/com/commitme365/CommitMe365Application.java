package com.commitme365;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class CommitMe365Application {

    public static void main(String[] args) {
        SpringApplication.run(CommitMe365Application.class, args);
    }

}
