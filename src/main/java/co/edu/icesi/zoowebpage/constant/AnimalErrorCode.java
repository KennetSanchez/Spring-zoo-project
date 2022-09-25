package co.edu.icesi.zoowebpage.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum AnimalErrorCode {

    CODE_01("The name only allows letters and white spaces"),
    CODE_02("The sex has only has 4 valid characters: 'M', 'm', 'F', 'f'"),
    CODE_03("It's weight it's too low, you should feed it more :c"),
    CODE_04("It's weight it's too high, he won't be able move it move it anymore :c"),
    CODE_05("This lemur broke the maximum life span record :0"),
    CODE_06("It's height it's too low, you should feed them better:c"),
    CODE07("It's height it's too high"),
    CODE_08("This lemur has just broke the spacial time continuity, or it's just a typo error"),
    CODE_09("The mother must be a female"),
    CODE_10("The father must be a male"),
    CODE_11("The animal can't be null"),
    CODE_12("The name must be unique, this one it's used");



    private final String message;
}
