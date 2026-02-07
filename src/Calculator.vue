<template>
    <div class="calc-bg">
        <div class="container py-5">
            <header class="text-center mb-5 header-container">
                <div class="logout-zone">
                    <button @click="handleLogout" class="logout-btn" title="Sign Out">
                        <span>Log Out</span>
                        <i class="fa-solid fa-right-from-bracket"></i>
                    </button>
                </div>

                <h1 class="main-title">Gold Purity Calculator</h1>
                <p class="subtitle">Live valuation based on karat weight and manufacturing overhead.</p>
            </header>
            <div class="grid-layout">
                <div v-for="purity in goldPurities" :key="purity" class="gold-tile">
                    <div class="tile-header">
                        <span class="k-value">{{ purity }}<span>K</span></span>
                        <span class="fineness">{{ getFineness(purity) }} fine</span>
                    </div>

                    <div class="tile-body">
                        <div class="input-field">
                            <label>Weight (grams)</label>
                            <input type="number" v-model.number="inputs[purity].grams" placeholder="0.00" />
                        </div>

                        <div class="input-field">
                            <label>Making Charge</label>
                            <div class="currency-input">
                                <span class="unit">₱</span>
                                <input type="number" v-model.number="inputs[purity].makingCharge" placeholder="0" />
                            </div>
                        </div>

                        <button class="calc-trigger" @click="calculatePrice(purity)">
                            Calculate Price
                        </button>

                        <div v-if="results[purity] !== null" class="price-reveal">
                            <label>Est. Net Value</label>
                            <div class="final-amount">{{ formatPrice(results[purity]) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoldCalculator",
    data() {
        const goldPurities = [6, 8, 10, 12, 14, 16, 18, 20, 21, 22, 24];
        const inputs = {};
        const results = {};

        goldPurities.forEach((p) => {
            inputs[p] = { grams: null, makingCharge: null };
            results[p] = null;
        });

        return { goldPurities, inputs, results };
    },
    methods: {
        getFineness(k) {
            const values = {
                6: "25.0%",
                8: "33.3%",
                10: "41.7%",
                12: "50.0%",
                14: "58.5%",
                16: "66.7%",
                18: "75.0%",
                20: "83.3%",
                21: "87.5%",
                22: "91.6%",
                24: "99.9%"
            };
            return values[k] || "";
        },
        calculatePrice(purity) {
            const { grams, makingCharge } = this.inputs[purity];
            if (!grams) return;

            const basePrice = purity * grams;
            const tax = 0.12 * (basePrice + (makingCharge || 0));
            this.results[purity] = basePrice + (makingCharge || 0) + tax;
        },
        formatPrice(val) {
            return new Intl.NumberFormat('en-PH', {
                style: 'currency',
                currency: 'PHP',
            }).format(val);
        },
        handleLogout() {
            console.log("Logging out...");
            window.location.href = "/login";
        },
    }
};
</script>
