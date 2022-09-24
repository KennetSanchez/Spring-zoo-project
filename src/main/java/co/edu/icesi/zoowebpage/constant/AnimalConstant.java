package co.edu.icesi.zoowebpage.constant;

public interface AnimalConstant {
    //Data taken from https://eol.org/pages/326533
    // RTL = Ring Tailed Lemur

    //Length from nose to tail, values are in cm's
    float RTL_LOWER_BOUND_HEIGHT = 28.9F;
    float RTL_UPPER_BOUND_HEIGHT = 103.5F;

    //Values are in grams
    float RTL_LOWER_BOUND_WEIGHT = 72.14F;
    float RTL_UPPER_BOUND_WEIGHT = 2900F;

    //Values are in years
    // According to https://animaldiversity.org/accounts/Lemur_catta/ , there's an RTL who lived 32 years
    float RTL_UPPER_BOUND_AGE = 32F;
}
