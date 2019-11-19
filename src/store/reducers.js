import {combineReducers} from 'redux';

function web3(state = {}, action) {
    switch(action.type) {
        case 'WEB3_LOADED':
            return {...state,connection:action.connection}
        default:
            return state;
    }
}


function web3Account(state = {}, action) {
    switch(action.type) {
        case 'WEB3_ACCOUNT_LOADED':
            return {...state,account:action.account}
        default:
            return state;
    }
}

function tokenContract(state = {}, action) {
    switch(action.type) {
        case 'TOKEN_CONTRACT_LOADED':
            return {...state,loaded: true, contract:action.tokenContract}
        default:
            return state;
    }
}

function exchangeContract(state = {}, action) {
    switch(action.type) {
        case 'EXCHANGE_CONTRACT_LOADED':
            return {...state,loaded: true, contract:action.exchangeContract}
        default:
            return state;
    }
}

function cancelledOrders(state = {}, action) {
    switch(action.type) {
        case 'CANCELLED_ORDERS_LOADED':
            return {...state, cancelledOrders:{loaded:true, data: action.cancelledOrders}}
        default:
            return state;
    }
}

function tradesOrders(state = {}, action) {
    switch(action.type) {
        case 'TRADES_ORDERS_LOADED':
            return {...state, tradesOrders:{loaded:true, data: action.tradesOrders}}
        default:
            return state;
    }
}

function orders(state = {}, action) {
    switch(action.type) {
        case 'ORDERS_LOADED':
            return {...state, orders:{loaded:true, data: action.orders}}
        default:
            return state;
    }
}

function orderCancelling(state = {}, action) {
    switch(action.type) {
        case 'ORDER_CANCELLING':
            return {...state, orderCancelling: true}
        default:
            return state;
    }
}

function orderCancelled(state = {}, action) {
    switch(action.type) {
        case 'ORDER_CANCELLED':
            return {...state,
                    orderCancelling: false, 
                    cancelledOrders : {
                        ...state.cancelledOrders,
                        data:[
                            state.cancelledOrders.data,
                            action.order
                        ]
                    }
                }
        default:
            return state;
    }
}


function orderTrading(state = {}, action) {
    switch(action.type) {
        case 'ORDER_TRADING':
            return {...state, orderTrading: true}
        default:
            return state;
    }
}


function orderTraded(state = {}, action) {
    //prevent duplicate orders
    let index,data;
    index  = state.tradesOrders.data.findIndex(order => order.id === action.order.id);

    if(index === -1) {
        data = [
            state.tradesOrders.data,
            action.order
        ]
    } else {
        data = state.tradesOrders.data; //already existing trades 
    }

    switch(action.type) {
        case 'ORDER_TRADED':
            return {...state,
                    orderTrading: false, 
                    tradesOrders : {
                        ...state.tradesOrders,
                        data:data
                    }
                }
        default:
            return state;
    }
}


function etherBalanceLoaded(state = {}, action) {
  
    switch(action.type) {
        case 'ETHER-BALANCE-LOADED':
            return {...state, etherBalance: action.etherBalance
                    }
        default:
            return state;
    }

}

function exchangeEtherBalanceLoaded(state = {}, action) {
  
    switch(action.type) {
        case 'EXCHANGE-ETHER-BALANCE-LOADED':
            return {...state,exchangeEtherBlance: action.exchangeEtherBalance,loading:true
                    }
        default:
            return state;
    }

}

function tokenBalanceLoaded(state = {}, action) {
  
    switch(action.type) {
        case 'TOKEN-BALANCE-LOADED':
            return {...state,tokenBalane: action.tokenBalance,loading:true
                    }
        default:
            return state;
    }

}


function exchangeTokenBalanceLoaded(state = {}, action) {
  
    switch(action.type) {
        case 'EXCHANGE-TOKEN-BALANCE-LOADED':
            return {...state,exchangeToknBalance:action.exchangeTokenBalance,loading:true
                    }
        default:
            return state;
    }

}

function balancesLoading(state = {}, action) {
  
    switch(action.type) {
        case 'BALANCES-LOADING':
            return {...state,balancesLoading:true
                    }
        default:
            return state;
    }

}

function etherDepositAmountChanged(state = {}, action) {
  
    switch(action.type) {
        case 'ETHER-DEPOSIT-AMOUNT-CHANGED':
            return {...state,etherDepositAmount:action.amount
                    }
        default:
            return state;
    }

}

function tokenDepositAmountChanged(state = {}, action) {
  
    switch(action.type) {
        case 'TOKEN-DEPOSIT-AMOUNT-CHANGED':
            return {...state,tokenDepositAmount:action.amount
                    }
        default:
            return state;
    }

}

function etherWithdrawAmountChanged(state = {}, action) {
  
    switch(action.type) {
        case 'ETHER-WITHDRAW-AMOUNT-CHANGED':
            return {...state,etherWithdrawAmount:action.amount
                    }
        default:
            return state;
    }

}

function tokenWithdrawAmountChanged(state = {}, action) {
  
    switch(action.type) {
        case 'TOKEN-WITHDRAW-AMOUNT-CHANGED':
            return {...state,tokenWithdrawAmount:action.amount
                    }
        default:
            return state;
    }

}

function depositDone(state = {}, action) {
  
    switch(action.type) {
        case 'DEPOSIT-DONE':
            return {...state,balancesLoading:false
                    }
        default:
            return state;
    }

}

function withdrawDone(state = {}, action) {
  
    switch(action.type) {
        case 'WITHDRAW-DONE':
            return {...state,balancesLoading:false
                    }
        default:
            return state;
    }

}


//Making new buy and sell order with amounts and prices
//Making buy and sell orders
function buyOrderAmountChanged(state = {}, action) {
  
    switch(action.type) {
        case 'BUY-ORDER-AMOUNT-CHANGED':
            return {...state,buyOrderAmount:action.amount
                    }
        default:
            return state;
    }

}

function sellOrderAmountChanged(state = {}, action) {
  
    switch(action.type) {
        case 'SELL-ORDER-AMOUNT-CHANGED':
            return {...state,sellOrderAmount:action.amount
                    }
        default:
            return state;
    }

}

function sellOrderPriceChanged(state = {}, action) {
  
    switch(action.type) {
        case 'SELL-ORDER-PRICE-CHANGED':
            return {...state,sellOrderPrice:action.price
                    }
        default:
            return state;
    }

}

function buyOrderPriceChanged(state = {}, action) {
  
    switch(action.type) {
        case 'BUY-ORDER-PRICE-CHANGED':
            return {...state,buyOrderPrice:action.price
                    }
        default:
            return state;
    }

}


function buyOrder(state = {}, action) {
    switch(action.type) {
        case 'BUY-ORDER':
            return {...state, buyOrder: true}
        default:
            return state;
    }
}

function sellOrder(state = {}, action) {
    switch(action.type) {
        case 'SELL-ORDER':
            return {...state, sellOrder: true}
        default:
            return state;
    }
}


function orderMade(state = {}, action) {
    //prevent duplicate new orders
    let index,data;
    index  = state.allOrders.data.findIndex(order => order.id === action.order.id);

    if(index === -1) {
        data = [
            state.allOrders.data,
            action.order
        ]
    } else {
        data = state.alllOrders.data; //already existing trades 
    }

    switch(action.type) {
        case 'ORDER_MADE':
            return {...state,
                    allOrders : {
                        ...state.allOrders,
                        data:data
                    },
                    buyOrder: {
                        ...state.buyOrder,
                        data:data,
                        makingOrder: false
                    },
                    sellOrder: {
                        ...state.sellOrder,
                        data:data,
                        makingOrder: false
                    }
                }
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    web3,
    web3Account,
    tokenContract,
    exchangeContract,
    cancelledOrders,
    tradesOrders,
    orders,
    orderCancelling,
    orderCancelled,
    orderTrading,
    orderTraded,
    etherBalanceLoaded,
    exchangeEtherBalanceLoaded,
    tokenBalanceLoaded,
    exchangeTokenBalanceLoaded,
    balancesLoading,
    etherDepositAmountChanged,
    tokenDepositAmountChanged,
    etherWithdrawAmountChanged,
    tokenWithdrawAmountChanged,
    depositDone,
    withdrawDone,
    buyOrderAmountChanged,
    sellOrderAmountChanged,
    buyOrderPriceChanged,
    sellOrderPriceChanged,
    buyOrder,
    sellOrder,
    orderMade
});

export default rootReducer;