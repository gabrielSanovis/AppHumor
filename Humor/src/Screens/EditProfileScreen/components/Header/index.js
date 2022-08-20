import React, {useState, useEffect} from "react";
import { Image, TouchableOpacity } from "react-native";
import { TextBold } from "../../../../componentes/Text";
import styles from "./style";
import api from "../../../../services/api";
import Loading from "../../../../componentes/Loading";
import { putUrl } from "../../Modal/ModalPhoto";

export default function Header({visible}) {
    const [ isLoad, setIsLoad] = useState(true);
    const [ mainPhoto, setMainPhoto] = useState('')

    const getUser = async () => {
        await api.get('/user')
          .then((res) => {
            setMainPhoto(res?.data?.photo?.url)
          })
          .catch(err => console.log('deu erro ' + err))
          .finally(() => setIsLoad(false))
      }

      <Loading visible={isLoad} />
    
    
      useEffect(() => {
        getUser()
      }, []);
    
    return (
        <>
            <Image
                style={styles.imgWrapper}
                source={{ uri: `${api.defaults.baseURL}${putUrl || mainPhoto}`}}
            />


            <TouchableOpacity
                onPress={visible}
                style={styles.photoBtn}
            >
                <TextBold style={styles.photoBtnText}>Alterar Foto</TextBold>
            </TouchableOpacity>
        </>
    );
}