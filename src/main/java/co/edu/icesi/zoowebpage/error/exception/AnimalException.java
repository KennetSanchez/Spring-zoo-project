package co.edu.icesi.zoowebpage.error.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
public class AnimalException extends RuntimeException {
    private HttpStatus httpStatus;
    private AnimalError error;
}