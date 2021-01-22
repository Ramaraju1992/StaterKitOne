import React, { Component } from 'react';
import {
    View, Text, Image, StyleSheet,
    TextInput, StatusBar, TouchableOpacity, ScrollView,
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import { AppStyles } from '@theme/';

const mapStateToProps = state => {
    return ({
        sample_data: state.submission.data_list,
    })
};
const mapDispatchToProps = {
};

/* Component ==================================================================== */
class HomePage extends Component {
    static componentName = 'HomePage';
    constructor(props) {
        super(props);
        this.state = {
            core_data: props.sample_data
        };
    }
    render = () => {
        var cards = this.state.core_data.map((item) => {
            return (
                <View style={[styles.cardStyle]} key={item.id}>
                    <Image
                        style={{
                            borderTopRightRadius: 5, borderTopLeftRadius: 5,
                            width: 250, resizeMode: 'stretch'
                        }} source={require('@images/image.png')} />

                    <View style={{ margin: 5, }}>
                        <View style={[AppStyles.flexRowSpace]}>
                            <Text style={[styles.blackFonts16, { fontWeight: 'bold' }]}>{item.name}</Text>
                            <Text style={[styles.blackFonts16, { fontWeight: 'bold' }]}>{item.expiry}</Text>
                        </View>
                        <Text style={{ fontSize: 13, color: 'blue' }}>{item.category}</Text>
                        <Text style={[styles.blackFonts13]}>{item.desc}</Text>
                        <View style={[{ margin: 10 }, AppStyles.flexRowSpace,]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Icon name='favorite' size={30} olor='#0d325c' />
                                <Icon name='share' style={{ marginLeft: 10 }} size={30} color='#0d325c' />
                            </View>
                            <TouchableOpacity onPress={()=>{Actions.postPreview(item);}} style={styles.buttonStyle}>
                                <Text style={[styles.whiteFonts16,{ paddingHorizontal: 10 }]}>Participate</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            );
        });
        var listItems = this.state.core_data.map((item) => {
            return (
                <View style={styles.itemStyle} key={item.id}>
                    <Image
                        style={{
                            borderTopLeftRadius: 15, borderBottomLeftRadius: 15,
                            height: 100, width: 150, resizeMode: 'cover',
                        }} source={require('@images/image.png')} />

                    <View style={{ margin: 5, flex: 1, marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={styles.blackFonts16, {  fontWeight: 'bold' }}>{item.name}</Text>

                        </View>
                        <Text style={{ fontSize: 13, color: 'blue' }}>{item.category}</Text>
                        <Text style={styles.blackFonts13}>{item.desc}</Text>
                    </View>
                </View>
            );
        });
        return (
            <View style={styles.containerStyle} >
                <StatusBar backgroundColor='#0d325c' barStyle='light-content' />
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: '100', color: '#FFF' }}>Welcome,</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>LOREM IPSUM,</Text>
                    <View style={{ height: 60, backgroundColor: '#FFF', marginTop: 20, padding: 10, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TextInput
                            style={{ fontSize: 16 }}
                            placeholder='Search for Competition'
                            placeholderTextColor='#08669c'
                        />
                        <Icon
                            name='search'
                            size={30}
                            color='#000' />
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#FFF' }}>Latest Competitions</Text>
                            <Text style={{ fontSize: 16, fontWeight: '100', color: '#FFF' }}>See all</Text>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
                                {cards}
                            </View>
                        </ScrollView>
                        <View style={{ margin: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginBottom: 5 }}>
                                <Text style={[styles.whiteFonts18, { fontWeight: 'bold' }]}>Pending Submission</Text>
                                <Text style={styles.whiteFonts16}>See all</Text>
                            </View>
                            {listItems}
                        </View>
                    </View>
                    <View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
/* Styles ==================================================================== */
const styles = StyleSheet.create({
    containerStyle: { flex: 1, backgroundColor: '#0d325c', paddingTop: 10 },
    blackFonts: { color: '#000' },
    whiteFonts: { color: '#FFF' },
    blackFonts13: { color: '#000', fontSize: 13 },
    whiteFonts13: { color: '#FFF', fontSize: 13 },
    blackFonts16: { color: '#000', fontSize: 16 },
    whiteFonts16: { color: '#FFF', fontSize: 16 },
    blackFonts18: { color: '#000', fontSize: 18 },
    whiteFonts18: { color: '#FFF', fontSize: 18 },
    cardStyle: { flex: 1, width: 250, backgroundColor: '#FFF', margin: 5, borderRadius: 20 },
    itemStyle: { flex: 1, height: 120, flexDirection: 'row', backgroundColor: '#FFF', margin: 5, borderRadius: 15, alignItems: 'center', justifyContent: 'space-around' },
    buttonStyle:{ borderRadius: 15, backgroundColor: '#0d325c', padding: 5 },
});
/* Export Component ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);