package co.edu.icesi.zoowebpage.dto;

import co.edu.icesi.zoowebpage.constant.AnimalConstant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnimalDTO {
    private UUID id;
    private UUID fatherId;
    private UUID motherId;
    @Size(min=1, max=12)
    private String name;
    private char sex;

    @DecimalMin(value = AnimalConstant.RTL_LOWER_BOUND_WEIGHT + "", message = "This weight it's too low, you should feed them more")
    @DecimalMax(value = AnimalConstant.RTL_UPPER_BOUND_WEIGHT + "", message = "This value it's too high, you should take it go gym")
    private float weight;

    @DecimalMax(value = AnimalConstant.RTL_UPPER_BOUND_AGE + "", message = "This animal broke the maximum life span record :0")
    private float age;

    @DecimalMin(value = AnimalConstant.RTL_LOWER_BOUND_HEIGHT + "", message = "This value it's too low")
    @DecimalMax(value = AnimalConstant.RTL_UPPER_BOUND_HEIGHT + "", message = "This value it's too high")
    private float height;

    @DateTimeFormat(pattern = "yyyy-MM-ddTHH:mm:ss")
    private LocalDateTime arrivalDate;
}
