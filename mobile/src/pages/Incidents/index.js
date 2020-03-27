import React, { useState, useEffect } from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import images from '../../assets/images';
import Feather from 'react-native-vector-icons/Feather';
import api from '../../services/api'

const Incidents = _ => {

  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)

  //Controle da pagina
  const [page, setPage] = useState(1)

  //Evitar que os dados sejam buscados mais de uma vez
  const [loding, setLoding] = useState(false)

  const navigation = useNavigation()

  function navigationToDetail(incident) {
    navigation.navigate('Detail', { incident })
  }

  async function loadIncidents() {

    //Verificação de apenas uma requisição por vez
    if (loding) {
      return
    }

    if (total > 0 && incidents.length === total) {
      return
    }

    setLoding(true)

    try {
      const response = await api.get('incidents', {
        params: {
          page
        }
      })
      setIncidents([...incidents, ...response.data])
      setTotal(response.headers['x-total-count'])
      setPage(page + 1)
      setLoding(false)
    } catch (error) {
      alert(`Erro: ${error}`)
    }

  }

  useEffect(_ => {
    loadIncidents()
  }, [])

  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Image style={styles.image} source={images.logoImg} />
        <Text style={styles.headerText}>
          Total <Text style={styles.headerTextBold}>{total} Casos</Text>
        </Text>
      </View>

      <Text style={styles.title}> Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        keyExtractor={incident => String(incident.id)}
        style={styles.incidentsList}
        data={incidents}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (

          <View style={styles.incidents}>
            <Text style={styles.incidentProperty}>ONG: </Text>
            <Text style={styles.incidentValue}>{incident.name} </Text>

            <Text style={styles.incidentProperty}>CASO: </Text>
            <Text style={styles.incidentValue}>{incident.title} </Text>

            <Text style={styles.incidentProperty}>VALOR: </Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
              .format(incident.value)} </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={_ => navigationToDetail(incident)}>

              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather
                name="arrow-right"
                size={16}
                color="#E02041" />

            </TouchableOpacity>
          </View>

        )} />
    </View>
  )
}

export default Incidents