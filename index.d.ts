import React, { Component } from 'react';

import { StyleProp, ViewStyle } from 'react-native';

interface SwitchProps {

    /**
     * switch宽度
     */
    width?: number,

    /**
     * switch高度
     */
    height?: number,

    /**
     * 打開時的背景色
     */
    activeBGColor?: string,

    /**
     * 關閉時的背景色
     */
    inActiveBGColor?: string,

    /**
     * 浮動球的背景色
     */
    ballBGColor?: string,

    /**
     * 當前值
     */
    value?: boolean,

    /**
     * 是否禁用
     */
    enable?: boolean,

    /**
     * 改變值之後的回調
     */
    onValueChange?: (value: boolean) => void,
}

export default class Switch extends Component<SwitchProps, {}> {

}
