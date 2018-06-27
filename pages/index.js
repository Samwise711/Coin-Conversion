import React, { Component } from 'react';
import { Form, Input, Card, Button, Grid, Message, Container, Dropdown, Icon} from 'semantic-ui-react';
import Layout from '../components/LayoutSearch';
import { Link } from '../routes';
//import Campaign from '../ethereum/campaign';
//import axios from 'axios';
import shapeshift from 'shapeshift.io';
//var Promise = require('bluebird')
//var shapeshift = Promise.promisifyAll(require('shapeshift.io'))

// class based component

class CampaignIndex extends Component {

  state = {
    value: '',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    errorMessage: '',
    conversion: '',
    pairs: ''
  };


//dynamically compute route for description tag below
  renderCampaigns = (event) => {
    event.preventDefault();

    this.setState({ value: '', errorMessage: '', conversion: '' });

    /*
    const testy = shapeshift.coins((err, coinData) => {
      this.setState({ coinList: JSON.stringify(Object.values(coinData))});
      console.log(coinData);
    })
    */

    var pair = (this.state.input1)+"_"+(this.state.input2);

    this.setState({ pairs: pair });

    const exchange = shapeshift.exchangeRate(pair, (err, rate) => {
      this.setState({ value: rate });
      return (rate); // => '158.71815287'
    });

    var reformat = " "+(this.state.input2)+" = 1 "+(this.state.input1);
    this.setState({ conversion: reformat });

    //this.setState({ value: JSON.stringify(exchange) });


      return (
        <Container content={exchange} />
      );
//["BTC","1ST","ANT","BNT","BCH","BTG","BLK","CVC","CLAM","DASH","DCR","DGB","DNT","DOGE","ETH","ETC","FCT","GAME","GNT","GUP","KMD","LBC","LSK","LTC","MAID","MONA","MSC","NEO","NBT","NMC","XEM","NMR","NVC","NXT","OMG","POT","PPC","QTUM","REP","RDD","RCN","RLC","SALT","SC","SNT","STORJ","START","STEEM","SWT","TRST","USDT","VOX","VRC","VTC","WINGS","XMR","XRP","ZEC","ZRX"]
  }


  handleDropdown = (e, data) => {
    this.setState({ input1: data.value.toLowerCase() });
  }

  handleDropdown2 = (e, data) => {
    this.setState({ input2: data.value.toLowerCase() });
  }

  convertCoins = (event) => {
    event.preventDefault();

    var withdrawalAddress = this.state.input4;
    var pair = this.state.pairs;
    var amount = this.state.input5; // LTC amount that you want to receive to your LTC address

    // if something fails
    var options = {
      returnAddress: this.state.input3,
      amount: this.state.input5 // <---- must set amount here
    }

    shapeshift.shift(withdrawalAddress, pair, options, function (err, returnData) {
      // ShapeShift owned BTC address that you send your BTC to
      var depositAddress = returnData.deposit

      // NOTE: `depositAmount`, `expiration`, and `quotedRate` are only returned if
      // you set `options.amount`

      // amount to send to ShapeShift (type string)
      var shiftAmount = returnData.depositAmount

      // Time before rate expires (type number, time from epoch in seconds)
      var expiration = new Date(returnData.expiration * 1000)

      // rate of exchange, 1 BTC for ??? LTC (type string)
      var rate = returnData.quotedRate

      // you need to actually then send your BTC to ShapeShift
      // you could use module `spend`: https://www.npmjs.com/package/spend
      // CONVERT AMOUNT TO SATOSHIS IF YOU USED `spend`
      // spend(SS_BTC_WIF, depositAddress, shiftAmountSatoshis, function (err, txId) { /.. ../ })

      // later, you can then check the deposit status
        console.log(err);

      shapeshift.status(depositAddress, function (err, status, data) {
        console.log(err);
        console.log(status); // => should be 'received' or 'complete'
      })
    })
  }

  render() {

    return (
    <Layout>
      <div style={{ marginTop: '25px' }}>



        <Grid>

          <Grid.Row>
          <Grid.Column width={7}>
          <h3>Check Exchange Rate</h3>
          <Form onSubmit={this.renderCampaigns} error={!!this.state.errorMessage}>
            <Form.Field>
            <label>From Coin 1</label>
            <Dropdown
              placeholder="Starting Coin" search selection
              options={[{"text":"Bitcoin","key":"BTC", "value": "BTC"}, {"text":"DASH","key":"DASH", "value": "DASH"}, {"text":"Ether","key":"ETH", "value": "ETH"}, {"text":"Litecoin","key":"LTC", "value": "LTC"}, {"text":"OmiseGo","key":"OMG", "value": "OMG"}, {"text":"Monero","key":"XMR", "value": "XMR"}, {"text":"Ripple","key":"XRP", "value": "XRP"}, {"text":"ZCash","key":"ZEC", "value": "ZEC"}]}
              onChange={this.handleDropdown}
              defaultValue={this.state.input1}
                />


                <label></label>
                <br></br>
                <label>To Coin 2</label>
                <Dropdown
                  placeholder="Desired Coin" search selection
                  options={[{"text":"Bitcoin","key":"BTC", "value": "BTC"}, {"text":"DASH","key":"DASH", "value": "DASH"}, {"text":"Ether","key":"ETH", "value": "ETH"}, {"text":"Litecoin","key":"LTC", "value": "LTC"}, {"text":"OmiseGo","key":"OMG", "value": "OMG"}, {"text":"Monero","key":"XMR", "value": "XMR"}, {"text":"Ripple","key":"XRP", "value": "XRP"}, {"text":"ZCash","key":"ZEC", "value": "ZEC"}]}
                  onChange={this.handleDropdown2}
                  defaultValue={this.state.input2}
                    />

            </Form.Field>

            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button primary>Get Rate!</Button>
          </Form>
          <br></br>
            <label>
            <b>Exchange Rate: &ensp;</b>
            </label>
            {this.state.value}
            {this.state.conversion}
            </Grid.Column>



            <Grid.Column width={2}>
            <div style={{ marginLeft: '25px' }}>
            <label></label>
            <br></br>
            <label></label>
            <br></br><label></label>
            <br></br>
            <label></label>
            <br></br>
            <Icon name='angle double right' size='huge' />
            </div>

            </Grid.Column>




            <Grid.Column width={7}>
            <h3>Convert Coins</h3>
            <Form onSubmit={this.convertCoins} error={!!this.state.errorMessage}>
              <Form.Field>
              <label>Coin 1 Wallet Address</label>
              <Input
                value={this.state.input3}
                onChange={event =>
                  this.setState({ input3: event.target.value })}
                />

                  <label></label>
                  <br></br>
                  <label>Coin 2 Wallet Address</label>
                  <Input
                    value={this.state.input4}
                    onChange={event =>
                      this.setState({ input4: event.target.value })}
                    />


                    <label></label>
                    <br></br>
                    <label>Amount to convert</label>
                    <Input
                      label={this.state.input1}
                      labelPosition="right"
                      value={this.state.input5}
                      onChange={event =>
                        this.setState({ input5: event.target.value })}
                      />


              </Form.Field>

              <Message error header="Oops!" content={this.state.errorMessage} />
              <Button primary>Convert!</Button>
            </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Layout>
    );
  }
}

export default CampaignIndex;

// Next also requires react component to be exported for each wep page file,
// as seen on line 17

//npm run dev => starts web app
