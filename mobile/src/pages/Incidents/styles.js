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
    headerText: {
        fontSize: 15,
        color: '#737380', 
    },
    headerTextBold: {
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },
    title: {
        fontSize: 30,
        marginTop: 48,
        marginBottom: 16,
        color: '#13131A',
        fontWeight: 'bold'
    },
    incidentsList: {
        marginTop: 32
    },
    incidents: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold'
    },
    incidentValue: {
        marginTop: 8,
        marginBottom: 24,
        fontSize: 14,
        color: '#737380',
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    },
})