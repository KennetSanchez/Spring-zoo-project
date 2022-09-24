package co.edu.icesi.zoowebpage.dto;

import co.edu.icesi.zoowebpage.constant.AnimalConstant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
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

    @DecimalMin(value = AnimalConstant.RTL_LOWER_BOUND_WEIGHT + "", message = "It's weight it's too low, you should feed it more :c")
    @DecimalMax(value = AnimalConstant.RTL_UPPER_BOUND_WEIGHT + "", message = "It's weight it's too high, he won't be able move it move it anymore :C")
    private float weight;

    @DecimalMax(value = AnimalConstant.RTL_UPPER_BOUND_AGE + "", message = "This lemur broke the maximum life span record :0")
    private float age;

    @DecimalMin(value = AnimalConstant.RTL_LOWER_BOUND_HEIGHT + "", message = "It's height it's too low, you should feed them better:c")
    @DecimalMax(value = AnimalConstant.RTL_UPPER_BOUND_HEIGHT + "", message = "It's height it's too high")
    private float height;

    private LocalDateTime arrivalDate;
}
