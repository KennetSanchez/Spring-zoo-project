package co.edu.icesi.zoowebpage.constant;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

public class AnimalConstantTests {

    public final UUID RTL_TEST_ID = UUID.nameUUIDFromBytes("animalIdSeed".getBytes());
    public final UUID RTL_FATHER_TEST_ID = UUID.nameUUIDFromBytes("fatherIdSeed".getBytes());
    public final UUID RTL_MOTHER_TEST_ID = UUID.nameUUIDFromBytes("motherIdSeed".getBytes());


    //Valid data
    public final LocalDateTime ARRIVAL_VALID_DATE = LocalDateTime.parse("2022-10-21 13:31:13", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    public final String RTL_VALID_NAME1 = "King Julien";
    public final String RTL_VALID_NAME2 = "Julien the king";

    public final float RTL_VALID_WEIGHT = 1975f;
    public final float RTL_VALID_AGE = 11.3f;
    public final float RTL_VALID_HEIGHT = 87f;


    //Invalid data
    public final LocalDateTime ARRIVAL_INVALID_DATE = LocalDateTime.parse("2023-10-21 13:31:13", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    public final String RTL_INVALID_NAME = "@n_.;<as7524";
    public final float RTL_INVALID_WEIGHT = 3975f;
    public final float RTL_INVALID_AGE = 901.3f;
    public final float RTL_INVALID_HEIGHT = 487f;

}
