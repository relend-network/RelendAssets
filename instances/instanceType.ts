export interface Instance {
    name: string;
    L1UnderlyingTokenName: string;
    L1UnderlyingTokenAddress: string;
    L1WrappedTokenName: string;
    L1WrappedTokenAddress: string;
    wrappedTokenLogoURI: string;
    L1OFTAdapterAddress: string;
    L2TokenName: string;
    L2TokenAddress: string;
    L2TokenIsOFT: boolean;
    BridgeUrl: string;
    L2ChainID: number;
    L2ChainEVM: boolean;
    live: boolean;
    display: boolean;
    L2LendingMarket?: L2LendingMarket;
}


export interface L2LendingMarket {
    name: string;
    vaultAddress: string;
    vaultAbiReference: string;
}

export type Instances = Instance[]; 
