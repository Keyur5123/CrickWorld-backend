export const getCricketApiKey = () => {
    const AllApiKey = [process.env.KEYUR_CRICKDATA,process.env.DAD_CRICKDATA,process.env.VISHWAS_CRICKDATA,process.env.VISHVAS_CRICKDATA,process.env.KSHMA_CRICKDATA,process.env.SMIT_CRICKDATA]

    for(let i=1 ; i<=151 ; i++ ){
        AllApiKey.push(process.env[`fake${i}`])
    }
    // console.log("AllApiKey :-",AllApiKey);
    var ApiKey = AllApiKey[Math.floor(Math.random() * AllApiKey.length)];
    return ApiKey;
    // return "0bc0be64-20d9-41ae-84c3-45ed010fcac4";
    // return "c061ca7d-0d6d-4941-a112-f4b881a103a3";
}