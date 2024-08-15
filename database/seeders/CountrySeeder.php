<?php

namespace Database\Seeders;

use App\Models\Meta\Country;
use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $countries = [
            [
                'country_name' => 'India',
                'phone_code' => 91,
                'iso_code' => 'IN / IND',
            ],
            [
                'country_name' => 'China',
                'phone_code' => 86,
                'iso_code' => 'CN / CHN',
            ],
            [
                'country_name' => 'United States',
                'phone_code' => 1,
                'iso_code' => 'US / USA',
            ],
            [
                'country_name' => 'Indonesia',
                'phone_code' => 62,
                'iso_code' => 'ID / IDN',
            ],
            [
                'country_name' => 'Pakistan',
                'phone_code' => 92,
                'iso_code' => 'PK / PAK',
            ],
            [
                'country_name' => 'Nigeria',
                'phone_code' => 234,
                'iso_code' => 'NG / NGA',
            ],
            [
                'country_name' => 'Brazil',
                'phone_code' => 55,
                'iso_code' => 'BR / BRA',
            ],
            [
                'country_name' => 'Bangladesh',
                'phone_code' => 880,
                'iso_code' => 'BD / BGD',
            ],
            [
                'country_name' => 'Russia',
                'phone_code' => '7-1 to 7-5, 7-8, 7-9',
                'iso_code' => 'RU / RUS',
            ],
            [
                'country_name' => 'Ethiopia',
                'phone_code' => 251,
                'iso_code' => 'ET / ETH',
            ],
            [
                'country_name' => 'Mexico',
                'phone_code' => 52,
                'iso_code' => 'MX / MEX',
            ],
            [
                'country_name' => 'Japan',
                'phone_code' => 81,
                'iso_code' => 'JP / JPN',
            ],
            [
                'country_name' => 'Philippines',
                'phone_code' => 63,
                'iso_code' => 'PH / PHL',
            ],
            [
                'country_name' => 'Egypt',
                'phone_code' => 20,
                'iso_code' => 'EG / EGY',
            ],
            [
                'country_name' => 'DR Congo',
                'phone_code' => 243,
                'iso_code' => 'CD / COD',
            ],
            [
                'country_name' => 'Vietnam',
                'phone_code' => 84,
                'iso_code' => 'VN / VNM',
            ],
            [
                'country_name' => 'Iran',
                'phone_code' => 98,
                'iso_code' => 'IR / IRN',
            ],
            [
                'country_name' => 'Turkey',
                'phone_code' => 90,
                'iso_code' => 'TR / TUR',
            ],
            [
                'country_name' => 'Germany',
                'phone_code' => 49,
                'iso_code' => 'DE / DEU',
            ],
            [
                'country_name' => 'Thailand',
                'phone_code' => 66,
                'iso_code' => 'TH / THA',
            ],
            [
                'country_name' => 'Tanzania',
                'phone_code' => 255,
                'iso_code' => 'TZ / TZA',
            ],
            [
                'country_name' => 'United Kingdom',
                'phone_code' => 44,
                'iso_code' => 'GB / GBR',
            ],
            [
                'country_name' => 'France',
                'phone_code' => 33,
                'iso_code' => 'FR / FRA',
            ],
            [
                'country_name' => 'South Africa',
                'phone_code' => 27,
                'iso_code' => 'ZA / ZAF',
            ],
            [
                'country_name' => 'Italy',
                'phone_code' => 39,
                'iso_code' => 'IT / ITA',
            ],
            [
                'country_name' => 'Kenya',
                'phone_code' => 254,
                'iso_code' => 'KE / KEN',
            ],
            [
                'country_name' => 'Myanmar',
                'phone_code' => 95,
                'iso_code' => 'MM / MMR',
            ],
            [
                'country_name' => 'Colombia',
                'phone_code' => 57,
                'iso_code' => 'CO / COL',
            ],
            [
                'country_name' => 'South Korea',
                'phone_code' => 82,
                'iso_code' => 'KR / KOR',
            ],
            [
                'country_name' => 'Uganda',
                'phone_code' => 256,
                'iso_code' => 'UG / UGA',
            ],
            [
                'country_name' => 'Sudan',
                'phone_code' => 249,
                'iso_code' => 'SD / SDN',
            ],
            [
                'country_name' => 'Spain',
                'phone_code' => 34,
                'iso_code' => 'ES / ESP',
            ],
            [
                'country_name' => 'Iraq',
                'phone_code' => 964,
                'iso_code' => 'IQ / IRQ',
            ],
            [
                'country_name' => 'Algeria',
                'phone_code' => 213,
                'iso_code' => 'DZ / DZA',
            ],
            [
                'country_name' => 'Argentina',
                'phone_code' => 54,
                'iso_code' => 'AR / ARG',
            ],
            [
                'country_name' => 'Afghanistan',
                'phone_code' => 93,
                'iso_code' => 'AF / AFG',
            ],
            [
                'country_name' => 'Poland',
                'phone_code' => 48,
                'iso_code' => 'PL / POL',
            ],
            [
                'country_name' => 'Canada',
                'phone_code' => 1,
                'iso_code' => 'CA / CAN',
            ],
            [
                'country_name' => 'Morocco',
                'phone_code' => 212,
                'iso_code' => 'MA / MAR',
            ],
            [
                'country_name' => 'Ukraine',
                'phone_code' => 380,
                'iso_code' => 'UA / UKR',
            ],
            [
                'country_name' => 'Angola',
                'phone_code' => 244,
                'iso_code' => 'AO / AGO',
            ],
            [
                'country_name' => 'Saudi Arabia',
                'phone_code' => 966,
                'iso_code' => 'SA / SAU',
            ],
            [
                'country_name' => 'Uzbekistan',
                'phone_code' => 998,
                'iso_code' => 'UZ / UZB',
            ],
            [
                'country_name' => 'Yemen',
                'phone_code' => 967,
                'iso_code' => 'YE / YEM',
            ],
            [
                'country_name' => 'Mozambique',
                'phone_code' => 258,
                'iso_code' => 'MZ / MOZ',
            ],
            [
                'country_name' => 'Ghana',
                'phone_code' => 233,
                'iso_code' => 'GH / GHA',
            ],
            [
                'country_name' => 'Peru',
                'phone_code' => 51,
                'iso_code' => 'PE / PER',
            ],
            [
                'country_name' => 'Malaysia',
                'phone_code' => 60,
                'iso_code' => 'MY / MYS',
            ],
            [
                'country_name' => 'Nepal',
                'phone_code' => 977,
                'iso_code' => 'NP / NPL',
            ],
            [
                'country_name' => 'Madagascar',
                'phone_code' => 261,
                'iso_code' => 'MG / MDG',
            ],
            [
                'country_name' => 'Ivory Coast',
                'phone_code' => 225,
                'iso_code' => 'CI / CIV',
            ],
            [
                'country_name' => 'Venezuela',
                'phone_code' => 58,
                'iso_code' => 'VE / VEN',
            ],
            [
                'country_name' => 'Cameroon',
                'phone_code' => 237,
                'iso_code' => 'CM / CMR',
            ],
            [
                'country_name' => 'Niger',
                'phone_code' => 227,
                'iso_code' => 'NE / NER',
            ],
            [
                'country_name' => 'Australia',
                'phone_code' => 61,
                'iso_code' => 'AU / AUS',
            ],
            [
                'country_name' => 'North Korea',
                'phone_code' => 850,
                'iso_code' => 'KP / PRK',
            ],
            [
                'country_name' => 'Syria',
                'phone_code' => 963,
                'iso_code' => 'SY / SYR',
            ],
            [
                'country_name' => 'Mali',
                'phone_code' => 223,
                'iso_code' => 'ML / MLI',
            ],
            [
                'country_name' => 'Taiwan',
                'phone_code' => 886,
                'iso_code' => 'TW / TWN',
            ],
            [
                'country_name' => 'Burkina Faso',
                'phone_code' => 226,
                'iso_code' => 'BF / BFA',
            ],
            [
                'country_name' => 'Sri Lanka',
                'phone_code' => 94,
                'iso_code' => 'LK / LKA',
            ],
            [
                'country_name' => 'Malawi',
                'phone_code' => 265,
                'iso_code' => 'MW / MWI',
            ],
            [
                'country_name' => 'Zambia',
                'phone_code' => 260,
                'iso_code' => 'ZM / ZMB',
            ],
            [
                'country_name' => 'Kazakhstan',
                'phone_code' => '7-6, 7-7',
                'iso_code' => 'KZ / KAZ',
            ],
            [
                'country_name' => 'Chile',
                'phone_code' => 56,
                'iso_code' => 'CL / CHL',
            ],
            [
                'country_name' => 'Romania',
                'phone_code' => 40,
                'iso_code' => 'RO / ROU',
            ],
            [
                'country_name' => 'Chad',
                'phone_code' => 235,
                'iso_code' => 'TD / TCD',
            ],
            [
                'country_name' => 'Somalia',
                'phone_code' => 252,
                'iso_code' => 'SO / SOM',
            ],
            [
                'country_name' => 'Ecuador',
                'phone_code' => 593,
                'iso_code' => 'EC / ECU',
            ],
            [
                'country_name' => 'Guatemala',
                'phone_code' => 502,
                'iso_code' => 'GT / GTM',
            ],
            [
                'country_name' => 'Senegal',
                'phone_code' => 221,
                'iso_code' => 'SN / SEN',
            ],
            [
                'country_name' => 'Netherlands',
                'phone_code' => 31,
                'iso_code' => 'NL / NLD',
            ],
            [
                'country_name' => 'Cambodia',
                'phone_code' => 855,
                'iso_code' => 'KH / KHM',
            ],
            [
                'country_name' => 'Zimbabwe',
                'phone_code' => 263,
                'iso_code' => 'ZW / ZWE',
            ],
            [
                'country_name' => 'Guinea',
                'phone_code' => 224,
                'iso_code' => 'GN / GIN',
            ],
            [
                'country_name' => 'Rwanda',
                'phone_code' => 250,
                'iso_code' => 'RW / RWA',
            ],
            [
                'country_name' => 'Benin',
                'phone_code' => 229,
                'iso_code' => 'BJ / BEN',
            ],
            [
                'country_name' => 'Burundi',
                'phone_code' => 257,
                'iso_code' => 'BI / BDI',
            ],
            [
                'country_name' => 'Bolivia',
                'phone_code' => 591,
                'iso_code' => 'BO / BOL',
            ],
            [
                'country_name' => 'Tunisia',
                'phone_code' => 216,
                'iso_code' => 'TN / TUN',
            ],
            [
                'country_name' => 'Haiti',
                'phone_code' => 509,
                'iso_code' => 'HT / HTI',
            ],
            [
                'country_name' => 'Belgium',
                'phone_code' => 32,
                'iso_code' => 'BE / BEL',
            ],
            [
                'country_name' => 'Dominican Republic',
                'phone_code' => '1-809, 1-829, 1-849',
                'iso_code' => 'DO / DOM',
            ],
            [
                'country_name' => 'Jordan',
                'phone_code' => 962,
                'iso_code' => 'JO / JOR',
            ],
            [
                'country_name' => 'South Sudan',
                'phone_code' => 211,
                'iso_code' => 'SS / SSD',
            ],
            [
                'country_name' => 'Cuba',
                'phone_code' => 53,
                'iso_code' => 'CU / CUB',
            ],
            [
                'country_name' => 'Honduras',
                'phone_code' => 504,
                'iso_code' => 'HN / HND',
            ],
            [
                'country_name' => 'Sweden',
                'phone_code' => 46,
                'iso_code' => 'SE / SWE',
            ],
            [
                'country_name' => 'Papua New Guinea',
                'phone_code' => 675,
                'iso_code' => 'PG / PNG',
            ],
            [
                'country_name' => 'Czech Republic',
                'phone_code' => 420,
                'iso_code' => 'CZ / CZE',
            ],
            [
                'country_name' => 'Azerbaijan',
                'phone_code' => 994,
                'iso_code' => 'AZ / AZE',
            ],
            [
                'country_name' => 'Tajikistan',
                'phone_code' => 992,
                'iso_code' => 'TJ / TJK',
            ],
            [
                'country_name' => 'Greece',
                'phone_code' => 30,
                'iso_code' => 'GR / GRC',
            ],
            [
                'country_name' => 'Portugal',
                'phone_code' => 351,
                'iso_code' => 'PT / PRT',
            ],
            [
                'country_name' => 'Hungary',
                'phone_code' => 36,
                'iso_code' => 'HU / HUN',
            ],
            [
                'country_name' => 'United Arab Emirates',
                'phone_code' => 971,
                'iso_code' => 'AE / ARE',
            ],
            [
                'country_name' => 'Belarus',
                'phone_code' => 375,
                'iso_code' => 'BY / BLR',
            ],
            [
                'country_name' => 'Israel',
                'phone_code' => 972,
                'iso_code' => 'IL / ISR',
            ],
            [
                'country_name' => 'Togo',
                'phone_code' => 228,
                'iso_code' => 'TG / TGO',
            ],
            [
                'country_name' => 'Sierra Leone',
                'phone_code' => 232,
                'iso_code' => 'SL / SLE',
            ],
            [
                'country_name' => 'Austria',
                'phone_code' => 43,
                'iso_code' => 'AT / AUT',
            ],
            [
                'country_name' => 'Switzerland',
                'phone_code' => 41,
                'iso_code' => 'CH / CHE',
            ],
            [
                'country_name' => 'Laos',
                'phone_code' => 856,
                'iso_code' => 'LA / LAO',
            ],
            [
                'country_name' => 'Hong Kong',
                'phone_code' => 852,
                'iso_code' => 'HK / HKG',
            ],
            [
                'country_name' => 'Nicaragua',
                'phone_code' => 505,
                'iso_code' => 'NI / NIC',
            ],
            [
                'country_name' => 'Serbia',
                'phone_code' => 381,
                'iso_code' => 'RS / SRB',
            ],
            [
                'country_name' => 'Libya',
                'phone_code' => 218,
                'iso_code' => 'LY / LBY',
            ],
            [
                'country_name' => 'Paraguay',
                'phone_code' => 595,
                'iso_code' => 'PY / PRY',
            ],
            [
                'country_name' => 'Kyrgyzstan',
                'phone_code' => 996,
                'iso_code' => 'KG / KGZ',
            ],
            [
                'country_name' => 'Bulgaria',
                'phone_code' => 359,
                'iso_code' => 'BG / BGR',
            ],
            [
                'country_name' => 'Turkmenistan',
                'phone_code' => 993,
                'iso_code' => 'TM / TKM',
            ],
            [
                'country_name' => 'El Salvador',
                'phone_code' => 503,
                'iso_code' => 'SV / SLV',
            ],
            [
                'country_name' => 'Republic of the Congo',
                'phone_code' => 242,
                'iso_code' => 'CG / COG',
            ],
            [
                'country_name' => 'Singapore',
                'phone_code' => 65,
                'iso_code' => 'SG / SGP',
            ],
            [
                'country_name' => 'Denmark',
                'phone_code' => 45,
                'iso_code' => 'DK / DNK',
            ],
            [
                'country_name' => 'Central African Republic',
                'phone_code' => 236,
                'iso_code' => 'CF / CAF',
            ],
            [
                'country_name' => 'Slovakia',
                'phone_code' => 421,
                'iso_code' => 'SK / SVK',
            ],
            [
                'country_name' => 'Finland',
                'phone_code' => 358,
                'iso_code' => 'FI / FIN',
            ],
            [
                'country_name' => 'Liberia',
                'phone_code' => 231,
                'iso_code' => 'LR / LBR',
            ],
            [
                'country_name' => 'Norway',
                'phone_code' => 47,
                'iso_code' => 'NO / NOR',
            ],
            [
                'country_name' => 'Palestine',
                'phone_code' => 970,
                'iso_code' => 'PS / PSE',
            ],
            [
                'country_name' => 'New Zealand',
                'phone_code' => 64,
                'iso_code' => 'NZ / NZL',
            ],
            [
                'country_name' => 'Costa Rica',
                'phone_code' => 506,
                'iso_code' => 'CR / CRI',
            ],
            [
                'country_name' => 'Lebanon',
                'phone_code' => 961,
                'iso_code' => 'LB / LBN',
            ],
            [
                'country_name' => 'Ireland',
                'phone_code' => 353,
                'iso_code' => 'IE / IRL',
            ],
            [
                'country_name' => 'Mauritania',
                'phone_code' => 222,
                'iso_code' => 'MR / MRT',
            ],
            [
                'country_name' => 'Oman',
                'phone_code' => 968,
                'iso_code' => 'OM / OMN',
            ],
            [
                'country_name' => 'Panama',
                'phone_code' => 507,
                'iso_code' => 'PA / PAN',
            ],
            [
                'country_name' => 'Kuwait',
                'phone_code' => 965,
                'iso_code' => 'KW / KWT',
            ],
            [
                'country_name' => 'Croatia',
                'phone_code' => 385,
                'iso_code' => 'HR / HRV',
            ],
            [
                'country_name' => 'Eritrea',
                'phone_code' => 291,
                'iso_code' => 'ER / ERI',
            ],
            [
                'country_name' => 'Georgia',
                'phone_code' => 995,
                'iso_code' => 'GE / GEO',
            ],
            [
                'country_name' => 'Mongolia',
                'phone_code' => 976,
                'iso_code' => 'MN / MNG',
            ],
            [
                'country_name' => 'Uruguay',
                'phone_code' => 598,
                'iso_code' => 'UY / URY',
            ],
            [
                'country_name' => 'Moldova',
                'phone_code' => 373,
                'iso_code' => 'MD / MDA',
            ],
            [
                'country_name' => 'Puerto Rico',
                'phone_code' => '1-787, 1-939',
                'iso_code' => 'PR / PRI',
            ],
            [
                'country_name' => 'Bosnia and Herzegovina',
                'phone_code' => 387,
                'iso_code' => 'BA / BIH',
            ],
            [
                'country_name' => 'Gambia',
                'phone_code' => 220,
                'iso_code' => 'GM / GMB',
            ],
            [
                'country_name' => 'Albania',
                'phone_code' => 355,
                'iso_code' => 'AL / ALB',
            ],
            [
                'country_name' => 'Jamaica',
                'phone_code' => '1-658, 1-876',
                'iso_code' => 'JM / JAM',
            ],
            [
                'country_name' => 'Armenia',
                'phone_code' => 374,
                'iso_code' => 'AM / ARM',
            ],
            [
                'country_name' => 'Qatar',
                'phone_code' => 974,
                'iso_code' => 'QA / QAT',
            ],
            [
                'country_name' => 'Botswana',
                'phone_code' => 267,
                'iso_code' => 'BW / BWA',
            ],
            [
                'country_name' => 'Lithuania',
                'phone_code' => 370,
                'iso_code' => 'LT / LTU',
            ],
            [
                'country_name' => 'Namibia',
                'phone_code' => 264,
                'iso_code' => 'NA / NAM',
            ],
            [
                'country_name' => 'Gabon',
                'phone_code' => 241,
                'iso_code' => 'GA / GAB',
            ],
            [
                'country_name' => 'Lesotho',
                'phone_code' => 266,
                'iso_code' => 'LS / LSO',
            ],
            [
                'country_name' => 'Guinea-Bissau',
                'phone_code' => 245,
                'iso_code' => 'GW / GNB',
            ],
            [
                'country_name' => 'Slovenia',
                'phone_code' => 386,
                'iso_code' => 'SI / SVN',
            ],
            [
                'country_name' => 'North Macedonia',
                'phone_code' => 389,
                'iso_code' => 'MK / MKD',
            ],
            [
                'country_name' => 'Latvia',
                'phone_code' => 371,
                'iso_code' => 'LV / LVA',
            ],
            [
                'country_name' => 'Equatorial Guinea',
                'phone_code' => 240,
                'iso_code' => 'GQ / GNQ',
            ],
            [
                'country_name' => 'Trinidad and Tobago',
                'phone_code' => '1-868',
                'iso_code' => 'TT / TTO',
            ],
            [
                'country_name' => 'Bahrain',
                'phone_code' => 973,
                'iso_code' => 'BH / BHR',
            ],
            [
                'country_name' => 'Timor-Leste',
                'phone_code' => 670,
                'iso_code' => 'TL / TLS',
            ],
            [
                'country_name' => 'Estonia',
                'phone_code' => 372,
                'iso_code' => 'EE / EST',
            ],
            [
                'country_name' => 'Mauritius',
                'phone_code' => 230,
                'iso_code' => 'MU / MUS',
            ],
            [
                'country_name' => 'Cyprus',
                'phone_code' => 357,
                'iso_code' => 'CY / CYP',
            ],
            [
                'country_name' => 'Eswatini',
                'phone_code' => 268,
                'iso_code' => 'SZ / SWZ',
            ],
            [
                'country_name' => 'Djibouti',
                'phone_code' => 253,
                'iso_code' => 'DJ / DJI',
            ],
            [
                'country_name' => 'Reunion',
                'phone_code' => 262,
                'iso_code' => 'RE / REU',
            ],
            [
                'country_name' => 'Fiji',
                'phone_code' => 679,
                'iso_code' => 'FJ / FJI',
            ],
            [
                'country_name' => 'Comoros',
                'phone_code' => 269,
                'iso_code' => 'KM / COM',
            ],
            [
                'country_name' => 'Guyana',
                'phone_code' => 592,
                'iso_code' => 'GY / GUY',
            ],
            [
                'country_name' => 'Bhutan',
                'phone_code' => 975,
                'iso_code' => 'BT / BTN',
            ],
            [
                'country_name' => 'Solomon Islands',
                'phone_code' => 677,
                'iso_code' => 'SB / SLB',
            ],
            [
                'country_name' => 'Macau',
                'phone_code' => 853,
                'iso_code' => 'MO / MAC',
            ],
            [
                'country_name' => 'Luxembourg',
                'phone_code' => 352,
                'iso_code' => 'LU / LUX',
            ],
            [
                'country_name' => 'Suriname',
                'phone_code' => 597,
                'iso_code' => 'SR / SUR',
            ],
            [
                'country_name' => 'Montenegro',
                'phone_code' => 382,
                'iso_code' => 'ME / MNE',
            ],
            [
                'country_name' => 'Cape Verde',
                'phone_code' => 238,
                'iso_code' => 'CV / CPV',
            ],
            [
                'country_name' => 'Western Sahara',
                'phone_code' => 212,
                'iso_code' => 'EH / ESH',
            ],
            [
                'country_name' => 'Malta',
                'phone_code' => 356,
                'iso_code' => 'MT / MLT',
            ],
            [
                'country_name' => 'Maldives',
                'phone_code' => 960,
                'iso_code' => 'MV / MDV',
            ],
            [
                'country_name' => 'Brunei',
                'phone_code' => 673,
                'iso_code' => 'BN / BRN',
            ],
            [
                'country_name' => 'Belize',
                'phone_code' => 501,
                'iso_code' => 'BZ / BLZ',
            ],
            [
                'country_name' => 'Bahamas',
                'phone_code' => '1-242',
                'iso_code' => 'BS / BHS',
            ],
            [
                'country_name' => 'Guadeloupe',
                'phone_code' => 590,
                'iso_code' => 'GP / GLP',
            ],
            [
                'country_name' => 'Iceland',
                'phone_code' => 354,
                'iso_code' => 'IS / ISL',
            ],
            [
                'country_name' => 'Martinique',
                'phone_code' => 596,
                'iso_code' => 'MQ / MTQ',
            ],
            [
                'country_name' => 'Mayotte',
                'phone_code' => '262, 639',
                'iso_code' => 'YT / MYT',
            ],
            [
                'country_name' => 'Vanuatu',
                'phone_code' => 678,
                'iso_code' => 'VU / VUT',
            ],
            [
                'country_name' => 'French Guiana',
                'phone_code' => 594,
                'iso_code' => 'GF / GUF',
            ],
            [
                'country_name' => 'French Polynesia',
                'phone_code' => 689,
                'iso_code' => 'PF / PYF',
            ],
            [
                'country_name' => 'New Caledonia',
                'phone_code' => 687,
                'iso_code' => 'NC / NCL',
            ],
            [
                'country_name' => 'Barbados',
                'phone_code' => '1-246',
                'iso_code' => 'BB / BRB',
            ],
            [
                'country_name' => 'Sao Tome and Principe',
                'phone_code' => 239,
                'iso_code' => 'ST / STP',
            ],
            [
                'country_name' => 'Samoa',
                'phone_code' => 685,
                'iso_code' => 'WS / WSM',
            ],
            [
                'country_name' => 'Curacao',
                'phone_code' => '599-9',
                'iso_code' => 'CW / CUW',
            ],
            [
                'country_name' => 'Saint Lucia',
                'phone_code' => '1-758',
                'iso_code' => 'LC / LCA',
            ],
            [
                'country_name' => 'Guam',
                'phone_code' => '1-671',
                'iso_code' => 'GU / GUM',
            ],
            [
                'country_name' => 'Kiribati',
                'phone_code' => 686,
                'iso_code' => 'KI / KIR',
            ],
            [
                'country_name' => 'Grenada',
                'phone_code' => '1-473',
                'iso_code' => 'GD / GRD',
            ],
            [
                'country_name' => 'Micronesia',
                'phone_code' => 691,
                'iso_code' => 'FM / FSM',
            ],
            [
                'country_name' => 'Jersey',
                'phone_code' => '44-1534',
                'iso_code' => 'JE / JEY',
            ],
            [
                'country_name' => 'Tonga',
                'phone_code' => 676,
                'iso_code' => 'TO / TON',
            ],
            [
                'country_name' => 'Seychelles',
                'phone_code' => 248,
                'iso_code' => 'SC / SYC',
            ],
            [
                'country_name' => 'Aruba',
                'phone_code' => 297,
                'iso_code' => 'AW / ABW',
            ],
            [
                'country_name' => 'Saint Vincent and the Grenadines',
                'phone_code' => '1-784',
                'iso_code' => 'VC / VCT',
            ],
            [
                'country_name' => 'United States Virgin Islands',
                'phone_code' => '1-340',
                'iso_code' => 'VI / VIR',
            ],
            [
                'country_name' => 'Antigua and Barbuda',
                'phone_code' => '1-268',
                'iso_code' => 'AG / ATG',
            ],
            [
                'country_name' => 'Isle of Man',
                'phone_code' => '44-1624',
                'iso_code' => 'IM / IMN',
            ],
            [
                'country_name' => 'Andorra',
                'phone_code' => 376,
                'iso_code' => 'AD / AND',
            ],
            [
                'country_name' => 'Dominica',
                'phone_code' => '1-767',
                'iso_code' => 'DM / DMA',
            ],
            [
                'country_name' => 'Cayman Islands',
                'phone_code' => '1-345',
                'iso_code' => 'KY / CYM',
            ],
            [
                'country_name' => 'Bermuda',
                'phone_code' => '1-441',
                'iso_code' => 'BM / BMU',
            ],
            [
                'country_name' => 'Guernsey',
                'phone_code' => '44-1481',
                'iso_code' => 'GG / GGY',
            ],
            [
                'country_name' => 'Greenland',
                'phone_code' => 299,
                'iso_code' => 'GL / GRL',
            ],
            [
                'country_name' => 'Faroe Islands',
                'phone_code' => 298,
                'iso_code' => 'FO / FRO',
            ],
            [
                'country_name' => 'Northern Mariana Islands',
                'phone_code' => '1-670',
                'iso_code' => 'MP / MNP',
            ],
            [
                'country_name' => 'Saint Kitts and Nevis',
                'phone_code' => '1-869',
                'iso_code' => 'KN / KNA',
            ],
            [
                'country_name' => 'Turks and Caicos Islands',
                'phone_code' => '1-649',
                'iso_code' => 'TC / TCA',
            ],
            [
                'country_name' => 'Sint Maarten',
                'phone_code' => '1-721',
                'iso_code' => 'SX / SXM',
            ],
            [
                'country_name' => 'American Samoa',
                'phone_code' => '1-684',
                'iso_code' => 'AS / ASM',
            ],
            [
                'country_name' => 'Marshall Islands',
                'phone_code' => 692,
                'iso_code' => 'MH / MHL',
            ],
            [
                'country_name' => 'Liechtenstein',
                'phone_code' => 423,
                'iso_code' => 'LI / LIE',
            ],
            [
                'country_name' => 'Monaco',
                'phone_code' => 377,
                'iso_code' => 'MC / MCO',
            ],
            [
                'country_name' => 'San Marino',
                'phone_code' => 378,
                'iso_code' => 'SM / SMR',
            ],
            [
                'country_name' => 'Gibraltar',
                'phone_code' => 350,
                'iso_code' => 'GI / GIB',
            ],
            [
                'country_name' => 'Saint Martin',
                'phone_code' => 590,
                'iso_code' => 'MF / MAF',
            ],
            [
                'country_name' => 'British Virgin Islands',
                'phone_code' => '1-284',
                'iso_code' => 'VG / VGB',
            ],
            [
                'country_name' => 'Palau',
                'phone_code' => 680,
                'iso_code' => 'PW / PLW',
            ],
            [
                'country_name' => 'Cook Islands',
                'phone_code' => 682,
                'iso_code' => 'CK / COK',
            ],
            [
                'country_name' => 'Anguilla',
                'phone_code' => '1-264',
                'iso_code' => 'AI / AIA',
            ],
            [
                'country_name' => 'Nauru',
                'phone_code' => 674,
                'iso_code' => 'NR / NRU',
            ],
            [
                'country_name' => 'Tuvalu',
                'phone_code' => 688,
                'iso_code' => 'TV / TUV',
            ],
            [
                'country_name' => 'Wallis and Futuna',
                'phone_code' => 681,
                'iso_code' => 'WF / WLF',
            ],
            [
                'country_name' => 'Saint Barthelemy',
                'phone_code' => 590,
                'iso_code' => 'BL / BLM',
            ],
            [
                'country_name' => 'Saint Pierre and Miquelon',
                'phone_code' => 508,
                'iso_code' => 'PM / SPM',
            ],
            [
                'country_name' => 'Montserrat',
                'phone_code' => '1-664',
                'iso_code' => 'MS / MSR',
            ],
            [
                'country_name' => 'Falkland Islands',
                'phone_code' => 500,
                'iso_code' => 'FK / FLK',
            ],
            [
                'country_name' => 'Niue',
                'phone_code' => 683,
                'iso_code' => 'NU / NIU',
            ],
            [
                'country_name' => 'Tokelau',
                'phone_code' => 690,
                'iso_code' => 'TK / TKL',
            ],
            [
                'country_name' => 'Vatican City',
                'phone_code' => '379 (not used), 39-06-698',
                'iso_code' => 'VA / VAT',
            ],
        ];
        Country::insert($countries);
    }
}
