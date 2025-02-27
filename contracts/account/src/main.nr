use dep::aztec::{
    context::{PrivateContext, PublicContext, Context},
    log::emit_encrypted_log,
    note::{
        note_header::{NoteHeader, NoteType},
        utils as note_utils,
    },
    oracle::get_public_key,
    hash::{compute_secret_hash, compute_nullifier},
    state_vars::{
        map::Map,
        public_state::PublicState,
    },
    types::{
        address::AztecAddress,
        abis::function_selector::FunctionSelector,
        auth_witness::AuthWitness,
        booleans::bool_to_field,
        hash::Hash,
        traits::{Empty, Deserialize},
    },
};
use dep::authwit::auth_witness_checker::verify_schnorr_auth_witness;

#[aztec]
pub contract Account {
    // Storage for the public key of the account owner
    #[state]
    pub owner_public_key: PublicState<[u8; 32]>;

    // Initialize the contract with the owner's public key
    #[aztec(private)]
    pub fn constructor(owner_public_key: [u8; 32]) {
        self.owner_public_key.write(owner_public_key);
    }

    // Validate a transaction with a Schnorr signature
    #[aztec(public)]
    pub fn validate(
        auth_witness: AuthWitness,
        function_selector: FunctionSelector,
        args_hash: Hash,
    ) -> bool {
        // Get the owner's public key
        let owner_public_key = self.owner_public_key.read();
        
        // Verify the Schnorr signature
        let is_valid = verify_schnorr_auth_witness(
            auth_witness,
            function_selector,
            args_hash,
            owner_public_key,
        );
        
        is_valid
    }
} 