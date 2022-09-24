package co.edu.icesi.zoowebpage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class ZooWebPageApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZooWebPageApplication.class, args);
	}

}
