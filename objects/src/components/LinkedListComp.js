import React from 'react';
import LinkedList from './LinkedList';
import NodeComp from './NodeComp';
import './style_nodes.css';



class LinkedListComp extends React.Component {
	constructor () {
		super();
		
		this.list = new LinkedList();
		this.list.insertNode('FirstNode', 10);
		this.list.insertNode('2ndNode', 5);
		this.list.insertNode('3ndNode', 1);
		this.list.insertNode('4ndNode', 2);

		this.state = {
			list: this.list
		}
	
		
	}

	insertNode = () => {
		// console.log('insert pressed');
		let valueSubject = document.getElementById('idSubject').value;
		let valueAmount = document.getElementById('idAmount').value;
		// console.log(valueAmount, valueSubject);
		this.list.insertNode(valueSubject, valueAmount);
		// console.log('new node is ', this.list.current, ' and size is ' + this.list.size);

		this.setState({
			list:this.list
		});
	}

	getTotal = () => {
		let total = this.list.totalAmount();
		return total;
	}

	deleteNode = () => {
		// console.log('size before del is ', this.list.size);

		this.list.deleteNode();
		// console.log('size after del is ', this.list.size);
		this.setState({
			list:this.list
		});
	}

	moveNext = () => {
		this.list.moveNext();
		this.setState({
			list:this.list
		});
	}

	movePrevious = () => {
		this.list.movePrevious();
		this.setState({
			list:this.list
		});
	}

	moveFirst = () => {
		this.list.moveFirst();
		this.setState({
			list:this.list
		});
	}

	moveLast = () => {
		this.list.moveLast();
		this.setState({
			list:this.list
		});
	}

	render () {

		return(
			<div className='containerMain'>

				

				<div className='containerCentre'>
					<div className='containerControlsBottom'>
						<h2>Number of Nodes: {this.state.list.size}</h2>
						
						<h2>Total of Amounts: {this.getTotal()}</h2>
						
					</div>
					<div className='containerControlsTop'>
						
						
						<button onClick={this.insertNode}>Add New Node</button>
						<input id='idSubject' placeholder='Subject'></input>
						
						<input id='idAmount' placeholder='Amount'></input>

						
					</div>
					
					<div className='nodeDetail'>
						<div className='containerLeft'>
							<button onClick={this.movePrevious}>Move to Previous</button>
							<button onClick={this.moveFirst}>Move to First</button>
						</div>

						{this.list.current === null ? '' :
                			<NodeComp current={this.list.current}/>
        				}

        				<div className='containerRight'>
							<button onClick={this.moveNext}>Next</button>
							<button onClick={this.moveLast}>Move to Last</button>
						</div>

					</div>
					<button onClick={this.deleteNode}>Delete Current Node</button>
				</div>

				

			</div>
		)

	}
}

export default LinkedListComp;