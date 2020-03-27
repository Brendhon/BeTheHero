import React from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    Linking
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import styles from './styles'
import images from '../../assets/images';
import Feather from 'react-native-vector-icons/Feather';
import email from 'react-native-email'

const Detail = _ => {


    const navigation = useNavigation()

    const route = useRoute()

    const incident = route.params.incident


    const navigationBack = _ => navigation.goBack()

    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(incident.value)}.`

    const sendMail = _ => {

        const to = [`${incident.email}`]

        email(to, {
            // Optional additional arguments
            subject: `Herói do caso: ${incident.title}`,
            body: message
        }).catch(console.error)
    }

    //Alguns aplicativos possuem uma url como é o caso do WhatsApp
    const sendWhatsApp = _ => {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }


    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <Image style={styles.image} source={images.logoImg} />

                <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={navigationBack}>

                    <Feather
                        name="arrow-left"
                        size={28}
                        color="#E02041" />

                </TouchableOpacity>

            </View>

            <View style={styles.incidents}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG: </Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf} </Text>

                <Text style={styles.incidentProperty}>CASO: </Text>
                <Text style={styles.incidentValue}>{incident.title} </Text>

                <Text style={styles.incidentProperty}>VALOR: </Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(incident.value)} </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia! </Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso. </Text>

                <Text style={styles.heroDescription}>Entre em contato: </Text>

                <View style={styles.actions}>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.action}
                        onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View >
    );
}

export default Detail