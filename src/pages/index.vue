<template>
  <div>
    <div class="mt-12 flex justify-center">
      <v-container class="space-y-5">
        <div class="flex flex-col items-center text-center">
          <v-row align="center" class="m-0" justify="center">
            <v-card class="overflow-y-auto" max-height="400" outlined ripple>
              <v-banner class="text-h5 font-weight-light justify-center" sticky>
                <v-img
                  alt="@emretepedev"
                  class="border-gradient-br-blue-green-gray-900 mx-auto rounded-full border-2 border-solid border-transparent"
                  height="150"
                  max-height="150"
                  max-width="150"
                  :src="require('@/assets/images/avatar.webp')"
                  title="@emretepedev"
                  width="150"
                />
              </v-banner>
              <v-card-text>
                <div>
                  I'm a passionate and curious Blockchain and Web Developer who
                  takes discipline seriously. I'm also open-minded and eager to
                  learn new things about technology and software.
                </div>
              </v-card-text>
            </v-card>
          </v-row>
        </div>
        <div>
          <Sparkline :gradients="gradients" :graph-data="graphData" />
        </div>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { gradients } from '@/data/pages/index'
  import contributions from '@/data/contributions.json'

  useNuxt2Meta({
    title: 'Homepage | ',
  })

  const graphData = ref<number[]>([])

  contributions.data.user.contributionsCollection.contributionCalendar.weeks.forEach(
    (week) => {
      week.contributionDays.forEach((day) => {
        graphData.value.push(day.contributionCount)
      })
    }
  )
</script>
