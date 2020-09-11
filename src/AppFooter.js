import React, { Component } from 'react';

export class AppFooter extends Component {

    render() {
        return  (
            <div className="layout-footer">
                <span className="footer-text" style={{'marginRight': '5px'}}>Escápate-2020</span>
                <span className="footer-text" style={{'marginLeft': '5px'}}>Copyright</span>
            </div>
        );
    }
}