package co.edu.icesi.zoowebpage.dto;

import co.edu.icesi.zoowebpage.constant.AnimalConstant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnimalWithParentsDTO {
    private UUID id;

    private UUID fatherId;

    private UUID motherId;

    @NotBlank
    @Pattern(regexp = "[a-zA-Z ]+", message = "The name only allows letters and white spaces")
    @Size(min = 1, max=120)
    private String name;

    @NotNull
    @Pattern(regexp = "[MnFf]", message = "The sex has only has 4 valid characters: 'M', 'm', 'F', 'f'")
    private String sex;

    @DecimalMin(value = AnimalConstant.RTL_LOWER_BOUND_WEIGHT + "", message = "It's weight it's too low, you should feed it more :c")
    @DecimalMax(value = AnimalConstant.RTL_UPPER_BOUND_WEIGHT + "", message = "It's weight it's too high, he won't be able move it move it anymore :c")
    private float weight;

    @DecimalMax(value = AnimalConstant.RTL_UPPER_BOUND_AGE + "", message = "This lemur broke the maximum life span record :0")
    private float age;

    @DecimalMin(value = AnimalConstant.RTL_LOWER_BOUND_HEIGHT + "", message = "It's height it's too low, you should feed them better:c")
    @DecimalMax(value = AnimalConstant.RTL_UPPER_BOUND_HEIGHT + "", message = "It's height it's too high")
    private float height;

    @NotNull
    @PastOrPresent(message = "This lemur has just broke the spacial time continuity, or it's just a typo error")
    private LocalDateTime arrivalDate;
}
