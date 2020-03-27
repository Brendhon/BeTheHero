import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
    },
    detailsButton: {
        fontSize: 15,
        color: '#737380', 
    },
    incidents: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48,
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
        marginTop: 24,
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 14,
        color: '#737380',
    },
    contactBox: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    heroTitle: {
        fontSize: 20,
        lineHeight: 30,
        color: '#13131A',
        fontWeight: 'bold'
    },
    heroDescription: {
        fontSize: 15,
        marginTop: 16,
        color: '#737380',
  
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action: {
        backgroundColor: '#E02041',
        borderRadius: 10,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
})