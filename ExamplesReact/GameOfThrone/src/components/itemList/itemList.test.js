import React from 'react';
import ItemList from './itemList';
import {mount} from 'enzyme';
import gotService from '../../services/gotService';
import {shallow} from "enzyme";

describe('Testing <ItemList/>', () => {
    const service = new gotService();
    const component = shallow(<ItemList/>);
    const list = mount(<ItemList
                                getData={service.getAllHouses}
                                renderItem={({name}) => name}
                        />);

    it('Click on item list must rerender all list in 1 instance', () => {
        list.setState({itemList: [{name: 'wqw', id: 1}, {name: 'wqw', id: 2}]});
        component.simulate('click');

        // expect(component.find('ul.item-list.list-group')).to.have.lengthOf(1);
    });
})
