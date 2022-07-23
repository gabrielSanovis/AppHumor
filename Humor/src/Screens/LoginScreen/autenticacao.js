import React from "react";
import { useState } from "react";
import api from "../../services/api";

export default function Autenticacao(email, password, navigation) {

    const [formatInvalid, setFormatInvalid] = useState(false);
    const [user, setUser] = useState({});
    const [userInvalid, setUserInvalid] = useState(false);

    const postAutenticacao = async () => {
        await api.post("/oauth/token", {
            'grant_type': 'password',
            'email': email,
            'password': password,
            'client_id': '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
            'client_secret': '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0'
        })
            .then((res) => {
                api.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Homepage' }]
                });
            })
            .catch(err => {
                console.log('Erro na autenticação ' + err);
                setUserInvalid(true);
                setTimeout(() => setUserInvalid(false), 3000);
            })

    }

    const emailValidator = /^[\w.!#$%&'*+\/=?^_`{|}~-]+@\w(?:\w{0,61}\w)?(?:\.\w(?:[\w-]{0,61}\w)?)*$/gi;
    const passwordValidator = /.{6,}/g

    const entrar = () => {

        if (emailValidator.test(email) && passwordValidator.test(password)) {
            postAutenticacao()
        } else {
            setFormatInvalid(true);
            setTimeout(() => setFormatInvalid(false), 3000);
        }
    }

    return { entrar, userInvalid, formatInvalid }

}