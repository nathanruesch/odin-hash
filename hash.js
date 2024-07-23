class HashMap {
    loadFactor = 0.8;
    initialSize = 16;

    buckets = [];

    hash(key) {
        let hashCode = 0;

        const primeNumber = 47;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        hashCode = hashCode % this.initialSize;

        return hashCode;
    }

    set(key, value) {
        let hash = hash(key);

        buckets[hash] = value;
    }
}