package co.edu.icesi.zoowebpage.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnimalDTO {
    private UUID id;
    private UUID fatherId;
    private UUID motherId;

    private String name;
    private char sex;

    private float weight;
    private int age;
    private float height;

    private Date arriveDate;
}
