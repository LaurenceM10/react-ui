import React, { Component } from 'react';
import { Field } from './Field';
import { TextField as BaseField } from './base/TextField';

export class TextField extends Field
{
    createField()
    {
        let value = this.processValue(this.pick(this.props.value, this.state.value));

        return <BaseField
                    name={this.props.name}
                    value={value}
                    label={this.props.label}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    readOnly={this.props.readOnly}
                    placeholder={this.props.placeholder}
                    onKeyPress={this.props.onKeyPress}
                    onChange={this.onChange}
                    onBlur={this.onBlur} />;
    }
}
