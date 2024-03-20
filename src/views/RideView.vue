<template>
  <div>
    <h1 class="text-4xl text-center p-8 font-extrabold bg-green-400">
      FASTER. SAFER. SMARTER.
    </h1>
    <div class="flex justify-center items-center">
      <div class="p-10 w-[900px]">
        <h1 class="text-2xl font-bold">Plan Your Trip</h1>
        <form @submit.prevent="handleSubmit" class="flex">
          <div>
            <div class="form-group">
              <div class="text-lg my-10">
                <input type="radio" name="tripType" value="oneWay" />
                <label class="mr-3 px-2">One Way Trip</label>
                <input type="radio" name="tripType" value="returnTrip" />
                <label class="px-2">Return Trip</label>
              </div>
            </div>
            <div class="form-group flex items-center gap-4">
              <div class="flex-1">
                <label>Pick-up Location</label>
                <input
                  id="pickupLocation"
                  name="pickupLocation"
                  type="text"
                  required
                  autofocus
                  v-model="pickupLocation"
                  class="p-3 my-2 w-96 bg-gray-200 rounded"
                  placeholder="eg: Colombo"
                  autoComplete="pickupLocation"
                />
              </div>
              <div class="flex-1">
                <label class="flex">Drop Location</label>
                <input
                  id="dropLocation"
                  name="dropLocation"
                  type="text"
                  required
                  autofocus
                  v-model="dropLocation"
                  class="p-3 my-2 w-96 flex-col bg-gray-200 rounded"
                  placeholder="eg: Panadura"
                  autoComplete="dropLocation"
                />
              </div>
            </div>
            <div class="form-group flex items-center gap-4">
              <div class="flex-1">
                <label>Pick-up Date</label>
                <input
                  id="pickupDate"
                  name="pickupDate"
                  type="date"
                  required
                  autofocus
                  v-model="pickupDate"
                  class="p-3 my-2 w-96 bg-gray-200 rounded"
                  placeholder="eg: Colombo"
                  autoComplete="pickupDate"
                />
              </div>
              <div class="flex-1">
                <label>Pick-up Time</label>
                <input
                  id="pickupTime"
                  name="pickupTime"
                  type="time"
                  required
                  autofocus
                  v-model="pickupTime"
                  class="p-3 my-2 w-96 bg-gray-200 rounded"
                  autoComplete="pickupTime"
                />
              </div>
            </div>
            <div class="form-group">
              <div>
                <VehicleCard />
              </div>
            </div>
            <div class="form-group">
              <label class="flex">E-mail</label>
              <input
                id="email"
                name="email"
                type="text"
                required
                autofocus
                v-model="email"
                class="p-3 my-2 w-full flex-col bg-gray-200 rounded"
                placeholder="E- mail"
                autoComplete="email"
              />
              <label class="flex">Mobile Number</label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="text"
                required
                autofocus
                v-model="mobileNumber"
                class="p-3 my-2 w-full flex-col bg-gray-200 rounded"
                placeholder="E- mail"
                autoComplete="mobileNumber"
              />
            </div>
            <button
              type="submit"
              class="p-3 my-2 w-full font-bold text-xl justify-center bg-green-500 rounded"
            >
              PLACE A BOOKING
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VehicleCard from "@/components/VehicleCard.vue";
export default {
  components: { VehicleCard },
};
</script>
