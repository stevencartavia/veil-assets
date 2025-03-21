use dep::aztec::{
    context::PrivateContext,
    prelude::AztecAddress,
};

use crate::PrivateToken;

#[test]
pub unconstrained fn test_simple_constructor() {
    let deployer = AztecAddress::from(1);
    let owner = AztecAddress::from(2);
    let contract_address = AztecAddress::from(3);
    
    let mut context = PrivateContext::new(deployer, contract_address);
    
    let initial_supply = 1000;
    PrivateToken::constructor(&mut context, initial_supply, owner);
    
    let balance = PrivateToken::get_balance(owner);
    assert(balance == 1000, "Balance should be 1000");
}