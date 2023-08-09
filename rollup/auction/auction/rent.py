import json
from datetime import datetime
from operator import attrgetter

import auction.wallet as Wallet
from auction.encoders import AuctionEncoder, BidEncoder
from auction.log import logger
from auction.model import Auction, Bid, Item
from auction.outputs import Error, Log, Notice, Output


class RentAuction(Auction):
    def __init__(self, seller, item, erc20, title, description, min_bid_amount, start_date, end_date, rental_duration, rental_price, current_date, total_owners):
        super().__init__(seller, item, erc20, title, description, min_bid_amount, start_date, end_date, current_date, total_owners)
        self.renter = None
        self.rental_start_date = None
        self.rental_duration = rental_duration
        self.rental_price = rental_price

    def rent(self, renter, timestamp):
        if self.renter:
            raise ValueError("This item is already rented.")
        if not self._has_enough_funds(self.erc20, renter, self.rental_price):
            raise ValueError("Renter doesn't have enough funds to rent.")

        self.renter = renter
        self.rental_start_date = timestamp
        # Add renter to the dictionary of renters

    def return_nft(self, timestamp):
        if not self.renter:
            raise ValueError("This item is not rented.")

        if timestamp < self.rental_start_date + self.rental_duration:
            remaining_time = self.rental_start_date + self.rental_duration - timestamp
            self.renter = None
            self.rental_start_date = None
        else:
            raise ValueError("Cannot return before the rental period is over.")

    def _has_enough_funds(self, erc20, renter, amount):
        balance = self._wallet.balance_get(renter)
        erc20_balance = balance.erc20_get(erc20)
        return amount <= erc20_balance
