package co.edu.icesi.zoowebpage.integration;

import co.edu.icesi.zoowebpage.constant.AnimalConstantTests;
import co.edu.icesi.zoowebpage.integration.config.InitialDataConfig;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.UUID;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@ContextConfiguration
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
        properties = { "spring.datasource.url=jdbc:h2:mem:testdb" })
@Import({InitialDataConfig.class})
@ActiveProfiles("test")
public class GetAnimalIntegrationTest {
    private MockMvc mockMvc;

    private final String ANIMAL_NAME = AnimalConstantTests.RTL_DB_ANIMAL_NAME;
    private final UUID FATHER_ID = AnimalConstantTests.RTL_DB_FATHER_ID;
    private final UUID MOTHER_ID = AnimalConstantTests.RTL_DB_MOTHER_ID;

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    public void init(){
        mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();
    }

    @Test
    @SneakyThrows
    public void getAnimalUsingId(){
        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/animals/id/" + FATHER_ID)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @SneakyThrows
    public void getAnimalUsingName(){
        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/animals/name/" + ANIMAL_NAME)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
    }

}
