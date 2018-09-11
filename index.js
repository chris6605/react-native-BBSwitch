'use strict';

import React from 'react';

import {
    View,
    TouchableOpacity,
    Animated,
} from 'react-native';

import AppConst from '../../const/AppConst';

import BaseComponent from '../../base/BaseComponent';

export default class BBSwitch extends BaseComponent {

    getSize = AppConst.getSize
    path = new Animated.Value(0)
    margin = AppConst._ONE_PIXEL

    static defaultProps = {
        width: AppConst.getSize(46),
        height: AppConst.getSize(25),
        activeBGColor: AppConst.MAIN_COLOR,
        inActiveBGColor: '#f3f3f3',
        ballBGColor: '#fff',
        value: false,
        enable: true,
    }

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            enable: this.props.enable,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...nextProps }, () => {
            if (this.state.value) {
                Animated.spring(this.path, {
                    toValue: 1
                }).start();
            } else {
                Animated.spring(this.path, {
                    toValue: 0
                }).start();
            }
        })
    }

    componentDidMount() {
        if (this.state.value) {
            this.path.setValue(1)
        } else {
            this.path.setValue(0)
        }
    }

    _handleTap() {
        this.setState({
            value: !this.state.value
        }, () => {
            if (this.state.value) {
                Animated.spring(this.path, {
                    toValue: 1
                }).start();
            } else {
                Animated.spring(this.path, {
                    toValue: 0
                }).start();
            }
            this.props.onValueChange && this.props.onValueChange(this.state.value)
        })
    }

    render() {
        return <View style={{ width: this.props.width + this.margin * 2, height: this.props.height + this.margin * 2, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                disabled={!this.state.enable}
                style={{ width: this.props.width, height: this.props.height, backgroundColor: this.state.value ? this.props.activeBGColor : this.props.inActiveBGColor, borderRadius: this.props.width / 2, }}
                onPress={() => {
                    this._handleTap();
                }}>
                <Animated.View style={{
                    transform: [{
                        translateX: this.path.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, this.props.width - this.props.height]
                        })
                    }], left: -this.margin, top: -this.margin, position: 'absolute', width: this.props.height + this.margin * 2, height: this.props.height + this.margin * 2, borderRadius: (this.props.height + this.margin * 2) / 2, backgroundColor: this.props.ballBGColor, borderColor: 0x00000040, borderWidth: AppConst._ONE_PIXEL,
                    shadowColor: '#999', shadowOpacity: 0.6, shadowOffset: { width: AppConst.getSize(20), height: AppConst.getSize(20) }, shadowRadius: 2
                }}>
                </Animated.View>
            </TouchableOpacity>
        </View >
    }
}



