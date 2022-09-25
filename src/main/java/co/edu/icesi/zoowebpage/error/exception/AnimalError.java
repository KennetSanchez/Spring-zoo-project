package co.edu.icesi.zoowebpage.error.exception;
import co.edu.icesi.zoowebpage.constant.AnimalErrorCode;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AnimalError {
    private AnimalErrorCode code;
    private String message;
}