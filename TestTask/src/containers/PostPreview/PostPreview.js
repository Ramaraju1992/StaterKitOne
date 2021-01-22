import React, { Component } from 'react';
import {
    View, Text,
    Image,
    StyleSheet, Alert,
    TextInput, StatusBar, Linking, Platform,
    TouchableOpacity, Animated, Dimensions, NativeEventEmitter, NativeModules,
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements'

import { AppStyles } from '@theme/';

import { ScrollView } from 'react-native-gesture-handler';

const mapStateToProps = state => {
    return ({
        sample_data: state.submission.data_list,
    })
};
const mapDispatchToProps = {
};

/* Component ==================================================================== */
class PostPreview extends Component {
    static componentName = 'PostPreview';
    constructor(props) {
        super(props);
        this.state = {
            core_data: props.sample_data[props.id]
        };
    }

    render = () => {

        var desc = this.state.core_data.desc + this.state.core_data.desc + this.state.core_data.desc + this.state.core_data.desc;

        return (
            <View style={[{ flex: 1, backgroundColor: '#0d325c', paddingTop: 10 }]} >
                <StatusBar backgroundColor='#0d325c' barStyle='light-content' />
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Icon
                        name='chevron-left'
                        size={30}
                        onPress={Actions.pop}
                        color='#FFF' />
                    <Text style={{ fontSize: 24, flex: 1, color: '#FFF', textAlign: 'center' }}>Details</Text>
                </View>
                <View style={{ margin: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{
                            height: 200, borderTopLeftRadius: 5, borderTopRightRadius: 5, resizeMode: 'stretch', width: '100%'
                        }} source={require('@images/image.png')} />

                    <View style={{ flex: 1, width: '100%', padding: 10, paddingTop: 15, backgroundColor: '#FFF', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>{this.state.core_data.name}</Text>
                                <Text style={{ fontSize: 14, color: '#000' }}>{this.state.core_data.category}</Text>
                            </View>
                            <Text style={{ fontSize: 12, color: '#000' }}>{this.state.core_data.expiry}</Text>
                        </View>
                        <Text style={{ fontSize: 14, color: '#000', marginTop: 10 }}>{desc}</Text>
                        <Text style={{ fontSize: 14, color: '#000', marginTop: 15 }}>{desc}</Text>

                        <View style={{ marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Icon name='favorite' size={25} olor='#0d325c' />
                                <Icon name='share' style={{ marginLeft: 10 }} size={25} color='#0d325c' />
                            </View>
                        </View>
                        <View style={{ margin: 10 }}>
                            <TouchableOpacity style={{ height: 50, backgroundColor: '#FFCE33', alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}>
                                <Text style={{ fontSize: 18, color: '#FFF', textAlign: 'center' }}>View Exsiting Submissions</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 50, marginTop: 10, backgroundColor: '#0d325c', alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}>
                                <Text style={{ fontSize: 18, color: '#FFF', textAlign: 'center' }}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}
/* Styles ==================================================================== */
const styles = StyleSheet.create({
    
});
/* Export Component ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(PostPreview);