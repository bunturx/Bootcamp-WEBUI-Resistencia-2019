import React from 'react';
import Footer from './Footer.jsx';
import { configure, shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true })


function setup() {
    let wrapper = render(<Footer />);
    return wrapper;
}

describe("<Footer />", () => {
    it("Should match Snapshot", () => {
        const component = setup();
        expect(component).toMatchSnapshot();
    })
})