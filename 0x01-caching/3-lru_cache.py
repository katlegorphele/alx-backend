#!/usr/bin/env python3
""" Lru cache module
"""

from base_caching import BaseCaching
from dataclasses import dataclass
from typing import List, Any


@dataclass
class LRUCache(BaseCaching):

    """ LRU cache class
    """

    def __post_init__(self):
        """ instance method
        """
        super().__init__()
        self._keys = []  # Store keys in the order they were accessed

    def put(self, key, item) -> None:
        """ add to cache
        Args:
            key (str): cache dict key
            item (any): key value
        """
        if key is not None and item is not None:
            if len(self.cache_data) >= LRUCache.MAX_ITEMS:
                # Remove the least recently used item
                discarded_key = self._keys.pop(0)
                self.cache_data.pop(discarded_key)
                print(f"DISCARD: {discarded_key}")
            self._keys.append(key)
            self.cache_data[key] = item

    def get(self, key: str) -> Any:
        """ get item by key 

        Args:
            key (str): item key

        Returns:
            Any: item
        """
        if key is not None and key in self.cache_data:
            self._keys.remove(key)
            self._keys.append(key)
            return self.cache_data[key]
        return None