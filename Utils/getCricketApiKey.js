var acc = 0;
var hits=0;

const KEYUR_CRICKDATA = 'b99abe70-6a02-41ec-9741-b50347818ab4'
const KSHMA_CRICKDATA = '16ebfc12-fc69-4bc9-b248-1e5237df0f2a'
const DAD_CRICKDATA = 'b122ef52-ff8e-4ab5-ad54-d0b7e6afa354'
const VISHWAS_CRICKDATA = '9c02b723-21c2-458a-aa1f-360360d1fd35'
const VISHVAS_CRICKDATA = 'fef93ec5-ca11-42c5-9205-07e4b7734046'
const SMIT_CRICKDATA = '5b4ec428-6c88-446c-bfed-6eebd7b58daa'

const fake1 = '64513f29-9e8c-4c68-b8c9-e49e75bd63e0'
const fake2 = '8910e614-1178-4404-89ba-d82d5920825f'
const fake3 = '7f548084-1c4e-425f-acc0-b299dd7d369b'
const fake4 = '8c743a5c-0ca4-449c-92ee-cfca94d3e2fd'
const fake5 = '1e079ab0-73a6-4cbe-be87-c2669b2d50f2'
const fake6 = '6a6574e8-2d73-4530-a27d-61a09ea67a2c'
const fake7 = 'd2832baa-c594-45f9-bde7-9eb14bf9a991'
const fake8 = 'd08410ff-0842-4e42-97a1-2fbe48757ea2'
const fake9 = '760745c3-7c3c-4c47-a76e-8df42f1de141'
const fake10 = 'a022ba08-6769-4e93-8a61-4cb7e01e512f'
const fake11 = 'c50d667e-e3b1-4043-a9f5-31e63caeb600'
const fake12 = '01b61948-39c6-4308-8126-aac3ab4e9362'
const fake13 = '199bc0b8-b707-4d68-ab62-c83ed04bea9a'
const fake14 = 'a82400cb-39a5-4e92-9ff4-b6acd9553bfd'
const fake15 = '86d6a2cb-9586-46e2-a6e8-de6a87852951'
const fake16 = '5a74efed-d5ad-47cf-abd1-13847c86b84b'
const fake17 = '531b3c0f-366a-411a-9902-5d39d5759e5f'
const fake18 = 'd47e89af-d3d0-46df-8359-f1e5432a41b3'
const fake19 = '347d5562-c624-45e7-b9d4-a4dad1f14cbe'
const fake20 = '106a64be-0433-413d-a3a9-622748c5969a'
const fake21 = '1c8bfd37-b052-436b-b61c-8aab9e2718d2'
const fake22 = '32b17c26-7d43-4ae0-b577-f2b10a310356'
const fake23 = '78c5e06a-1807-45dc-9b36-1ec75a298550'
const fake24 = '95285803-45a7-416e-bc87-f5baa8d4a11c'
const fake25 = '9c59ede2-baeb-430d-ae80-e863aedca7c7'
const fake26 = '6b0644f1-4b93-4fff-be68-fe0001aef7e4'
const fake27 = 'd737e0bf-6452-4ece-af58-4dbbfd206ad1'
const fake28 = '09318b36-cd77-49cd-8bf0-cc871afd8e15'
const fake29 = '24e12614-e6dd-4302-b847-db1faf875509'
const fake30 = 'e8b747ad-ddc0-4b8b-9c21-65dd3dbc75aa'
const fake31 = '83f77cc8-d51a-435f-b6e3-f8f148f3d7e7'
const fake32 = '06cdac40-301a-4f19-ae56-4d28e3f59ee1'
const fake33 = '35f43803-6dee-4b4d-b9bc-fd8a6ca73bf1'
const fake34 = '69b91cc2-f384-4579-ba31-b1dc46936414'
const fake35 = 'c1a07589-13cc-49b9-9ff5-462a9d388fd8'
const fake36 = '41d0a510-338b-4c55-842b-a11479516d9e'
const fake37 = '694fef17-0d6c-4115-b349-94bbac658b5e'
const fake38 = '19e02540-532e-4e27-88d7-53de514c5d31'
const fake39 = 'c14249c0-7a7a-46a8-aba0-7983a95098d5'
const fake40 = 'a430aff2-2f25-4de1-84a3-7ae2c1154329'
const fake41 = 'a3f5069e-00da-4b11-94bc-56767b34ef78'
const fake42 = 'c49c0cad-61d3-404a-9412-52430423802e'
const fake43 = '91ae6ee8-7661-4acb-b78e-288b75a7e31f'
const fake44 = '95ac36b9-5e33-4b6e-8c82-a922fd115e66'
const fake45 = 'ae3501e7-0a28-48f8-8fc1-96bbfe3d7c0d'
const fake46 = 'd3228b45-e804-4691-9176-af96a9fade0b'
const fake47 = '37ca7c52-15ff-460a-a2b3-add2e06d424d'
const fake48 = '4525d806-9d79-42a8-b557-f6d571efb5ff'
const fake49 = '0bd296ae-5cde-4402-8ad7-667f784ba666'
const fake50 = '68b21254-0c7c-481e-b11b-fc9aff5d9ff0'

const fake51 = 'b06de5fa-4816-426a-a5e3-70af574b6a7b'
const fake52 = '47a585dd-4c05-46b8-a34a-8fa31d9c172a'
const fake53 = 'cb534aff-930a-4cbe-9688-d781503dbdb1'
const fake54 = '638f1a58-34ca-4afe-af93-d4dbbc0101a7'
const fake55 = 'e54a29fe-57ee-404c-a238-92e077196c24'
const fake56 = 'dacee3a9-d26c-465e-a19a-19eb06184cec'
const fake57 = '976fc221-f796-4f7f-9b99-48c2ea312055'
const fake58 = '4b93bfce-ff8c-4019-8e9f-0d8c8c27eb41'
const fake59 = 'c82c6b0f-0dfa-43a4-9676-5d4a4cb0b232'
const fake60 = 'f7e841b4-f6f8-469d-82b0-f1ff2b017aae'
const fake61 = 'c4a729eb-257b-4694-82a7-a2f0af787fc9'
const fake62 = '546b5c69-13fe-4a6e-97c9-d10e3547105e'
const fake63 = '16c585fd-afc9-419c-8d6d-2b453256e3bf'
const fake64 = '2f33a2d4-dee8-4355-86e5-845caa23a28d'
const fake65 = '8f46eab2-8c5c-49bd-930c-ab012c3925f8'
const fake66 = 'f02afa6b-944f-47cd-8f9b-509a372b2e7f'
const fake67 = 'f02afa6b-944f-47cd-8f9b-509a372b2e7f'
const fake68 = 'ae636b59-8ad5-4f7b-9459-0a847e0fce7d'
const fake69 = 'fd6dfad0-6b50-470d-979c-17ac14c85b22'
const fake70 = '4b54b6df-4dd5-46e5-b2ab-3fb29fcc6082'
const fake71 = 'bd8e7c7d-bfeb-44d1-b388-52a95ebb198a'
const fake72 = '4e7075f4-9cef-495a-a7d7-5c9057ad8844'



const fake73 = '40c8d8ad-ea49-4026-bf79-5afd8478e4f2'
const fake74 = '0e20c817-3b83-48a6-b760-e92abc96ff5e'
const fake75 = 'bcb41516-81cb-4815-8581-4aad78c23e49'
const fake76 = '0eea6bd3-23e6-4e49-9a75-bf30acb1038f'
const fake77 = '34c70f86-0699-43b0-bc42-622dd335910c'
const fake78 = '1805b5d5-45ed-46bb-8d86-bc4aa0375e75'
const fake79 = '4a8c480f-3075-4587-b22f-b9af35316e2e'
const fake80 = '7e715bd2-6870-41c8-8fbc-baa1da3bc4da'
const fake81 = 'b7d4c683-2868-4d39-a69a-ebd242d878f5'
const fake82 = '3947caba-31a6-4a49-98cd-bcc39c474079'
const fake83 = 'b5249214-ce48-4388-965b-1f5117123581'
const fake84 = '346f443a-3367-48bd-89fb-6950405cd806'
const fake85 = '60022f44-be42-4c5f-9191-07aea2e2653c'
const fake86 = '06439228-30de-4259-ba1a-42bd131d772e'
const fake87 = 'd5c5a37c-1f11-4119-b82f-b565b8b2c850'
const fake88 = '703d2e14-6ef8-47b0-a63f-7cf10cf4257c'
const fake89 = '3b1541f4-9e2a-4174-b307-ec6166aff008'
const fake90 = '39fbc14d-b565-4f94-8b37-0df5ca290589'
const fake91 = '170f852b-34c8-4a97-95d5-de15b24767da'
const fake92 = 'ecb2e7ac-7a6b-45d6-843e-ffeac07472a9'
const fake93 = '1690933a-30ce-4a9d-8a86-a32affb37f69'

const fake94 = 'e446ad63-9284-4e2f-8b55-1963fa39ef3f'
const fake95 = 'da47433d-9b8d-4f20-a64f-bc9301e0ce12'
const fake96 = '45861707-5842-4790-b13a-97e7dd3a15be'
const fake97 = 'b95547c6-0a0f-4863-873a-ab30fe1c90ad'
const fake98 = '126d4100-6e3f-4d33-9422-e54f0160cbbb'
const fake99 = '30833a4a-ba21-407d-9a42-3c8dd13e090b'
const fake100 = 'c20520f7-0c99-4268-b94f-26058525479f'
const fake101 = 'f8cc11a8-8163-4f61-a87c-359045236133'
const fake102 = '9b091231-bdd5-4692-abd9-4a1cbc4a68a5'
const fake103 = '0bb89fd6-815d-4723-ab5c-7741b5ea6746'
const fake104 = 'c061ca7d-0d6d-4941-a112-f4b881a103a3'
const fake105 = 'e6adf91c-2fd3-4fff-984e-cd9b504dc07f'
const fake106 = '25e05e75-9913-4509-be5e-c2c3a036753d'
const fake107 = '1babf837-4701-4d30-8c7b-80a7775055f7'


const fake108 = '08eaf3dc-edf4-44da-b412-b90de69941b3'
const fake109 = '072e9bd1-2a92-4f32-ab84-3bd7344d3b2e'
const fake110 = '18eb2d87-388d-4074-bbf5-4a3366853bbd'
const fake111 = 'bf38b418-8063-4f80-a54b-7536a7b9f201'
const fake112 = '4899701a-d939-40d1-98e0-d03d1f6f3f8a'
const fake113 = '5e1ae750-c454-4e34-bf3b-83f20eb2abc1'
const fake114 = '81a76c33-d062-451d-beec-e77ad8f61fce'
const fake115 = '765fca5b-7352-4137-8c29-f36b066f443b'
const fake116 = '154ee296-66c4-4f16-ade9-c5f947077420'
const fake117 = '446cac73-d005-4684-b2d9-49185ada9727'
const fake118 = '7b4475d5-77de-47a4-8d0f-4dac6e92537a'
const fake119 = 'd37cf362-ffa5-4f2c-bd15-134cf9c0a8c6'
const fake120 = '29e6b31a-4159-4251-bbdf-4b6d77037b07'
const fake121 = '1d36d2e6-d061-46ae-a6d0-44997ffcf9ca'
const fake122 = '7f213b4f-bbf4-48d2-a04e-7b613ba78451'
const fake123 = '1e81fb99-27fc-46a2-ba87-2507b6c1298b'
const fake124 = '1cd23433-70ee-42a8-9607-fdd1634e29a6'
const fake125 = 'c238206a-05cd-4db4-8154-4a957d8c7666'
const fake126 = '058e7f5b-249f-49f3-b7ed-82f687faace4'
const fake127 = '04e8b386-b04b-467b-8bc9-774f1ad98b5e'
const fake128 = 'b16aadf6-d617-4851-a08e-25f54cfa31b2'
const fake129 = 'b6c67c7c-120c-4ab4-89a7-4b0c34b485e5'
const fake130 = '811481e8-8a1b-4f9c-8f61-57fa6ddd2afd'
const fake131 = '145c7069-77c0-4372-b19a-27aaafbaeabb'
const fake132 = 'b3fa3a5a-d848-4216-8ab5-666f2d4549fc'
const fake133 = '2f7216cb-473b-42c1-968a-5f480311bc87'
const fake134 = '9a273b06-75bd-40cc-83ca-93fe8f505151'
const fake135 = 'a402ee34-21cc-46e3-beb5-aa70fe4123cc'
const fake136 = 'aa385158-0a02-42a3-beaa-b3516809336c'
const fake137 = 'e5007330-cf9b-42c1-90f1-3b4bb09a0859'
const fake138 = 'e2c0d160-c6a7-421f-9775-e8eac6e913dd'
const fake139 = '1a7bf030-cd82-4e1c-9a0b-dd5050c15249'
const fake140 = '34570af2-4cb7-4b81-84d9-6fb1a8ec613f'
const fake141 = '69ff47c2-ca85-40a4-916b-5fbb821733ff'
const fake142 = '1fa704f1-911b-4105-8cfd-a26f09af0956'
const fake143 = 'bee28820-4716-400e-bfc5-c4c77d37de08'
const fake144 = '5ba2ec6e-e523-434c-ad5a-a351296fc937'
const fake145 = 'd2cce941-bcb7-4405-aa29-ede21ecc70c6'
const fake146 = '04f6b387-6842-45ec-9fc4-960f249b1ce5'
const fake147 = 'e3996a6a-c60b-430a-9b65-0d695dc78341'
const fake148 = '891c49fa-0c49-4099-96a1-fe702ce32f94'
const fake149 = '428083c3-2904-476b-86e1-b50383859df4'
const fake150 = '719c2fb3-63e7-4f69-b455-d6601b51ae10'
const fake151 = 'ffc1359f-9ffc-438f-9780-e775400d57be'

const fake152 = '54886712-63b4-4454-8736-7301f63111fb'
const fake153 = '56bfb7b1-df71-494a-af8d-b30a200fbfd4'
const fake154 = '48defbbe-97ba-477d-bcd7-64d890981fbd'
const fake156 = 'cc982365-e89d-4067-9d0f-47df2eb13a40'
const fake155 = 'f05db7eb-0b5d-4746-8fca-17fdedcd2491'
 

const MergeApiKey = () => {
    var AllApiKeys = [process.env.KEYUR_CRICKDATA,process.env.DAD_CRICKDATA,process.env.VISHWAS_CRICKDATA,process.env.VISHVAS_CRICKDATA,process.env.KSHMA_CRICKDATA,process.env.SMIT_CRICKDATA]

    for(let i=1 ; i<=156 ; i++ ){
        AllApiKeys.push(`fake${i}`)
    }

    return AllApiKeys;
}

var g1 = new Date();

export const getCricketApiKey = () => {

    if(g1.getHours() == 23 && g1.getMinutes() == 59){
        acc = 0;
        hits = 0;
    }
   
    // var ApiKey = AllApiKey[Math.floor(Math.random() * AllApiKey.length)];

    var AllApiKey = MergeApiKey();

    if(acc <= 161 && hits <= 100){
        var ApiKey = AllApiKey[acc]
        hits++;
    }
    else {
        acc++;
    }

    return ApiKey ? ApiKey : "" ;
}