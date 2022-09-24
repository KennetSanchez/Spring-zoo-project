package co.edu.icesi.zoowebpage.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Table(name = "animals")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Animal {

    @Id
    @Type(type="org.hibernate.type.UUIDCharType")
    private UUID id;
    private UUID fatherId;
    private UUID motherId;


    private String name;
    private char sex;

    private float weight;

    private float age;

    private float height;

    private LocalDateTime arrivalDate;

    @PrePersist
    public void generateId(){
        this.id = UUID.randomUUID();
    }

}
