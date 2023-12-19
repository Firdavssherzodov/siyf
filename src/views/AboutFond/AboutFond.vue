<template>
  <div class="aboutfond">
    <div class="pt-6 md:px-5 bg-transparent">
      <TabView>
        <TabPanel>
          <template #header>
            <div class="flex items-center gap-2 md:px-4">
              <i
                class="fas fa-people-carry-box text-white text-xs md:text-3xl"
              ></i>
              <span class="text-[16px] whitespace-nowrap md:text-[20px]"
                >Fond haqida</span
              >
            </div>
          </template>

          <template #default>
            <div class="card mt-10 md:px-10">
              <Timeline
                layout="vertical"
                :value="infos"
                align="alternate"
                class="customized-timeline"
              >
                <template #marker="slotProps">
                  <span
                    class="flex w-2rem h-3rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
                  >
                    <i :class="slotProps.item.icon" class="text-3xl"></i>
                  </span>
                </template>
                <template #content="slotProps">
                  <Card class="mt-3 p-ripple" v-ripple>
                    <template #title>
                      <h1 class="text-white">{{ slotProps.item.header }}</h1>
                    </template>

                    <template #content>
                      <img
                        v-if="slotProps.item.image"
                        :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`"
                        :alt="slotProps.item.name"
                        width="200"
                        class="shadow-1"
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores
                        earum nam nobis, culpa ratione quam perferendis esse,
                        cupiditate neque quas1
                      </p>
                      <Button label="Read more" text></Button>
                    </template>
                  </Card>
                </template>
              </Timeline>
            </div>
          </template>
        </TabPanel>
        <TabPanel>
          <template #header>
            <div class="flex items-center gap-2 md:px-4">
              <i class="fas fa-arrow-trend-up text-xs md:text-3xl"></i>
              <span class="text-[16px] md:text-[20px] whitespace-nowrap"
                >Maqsad va vazifalar</span
              >
            </div>
          </template>

          <template #default>
            <div class="card mt-10 md:px-10">
              <Timeline
                layout="vertical"
                :value="infos2"
                align="alternate"
                class="customized-timeline"
              >
                <template #marker="slotProps2">
                  <span
                    class="flex w-2rem h-3rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
                  >
                    <i :class="slotProps2.item.icon" class="text-3xl"></i>
                  </span>
                </template>
                <template #content="slotProps2">
                  <Card class="mt-3 p-ripple" v-ripple>
                    <template #title>
                      <h1 class="text-white">{{ slotProps2.item.header }}</h1>
                    </template>

                    <template #content>
                      <img
                        v-if="slotProps2.item.image"
                        :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`"
                        :alt="slotProps.item.name"
                        width="200"
                        class="shadow-1"
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores
                        earum nam nobis, culpa ratione quam perferendis esse,
                        cupiditate neque quas1
                      </p>
                      <Button label="Read more" text></Button>
                    </template>
                  </Card>
                </template>
              </Timeline>
            </div>
          </template>
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script setup>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Card from "primevue/card";
import Timeline from "primevue/timeline";
import { ref } from "vue";
import Button from "primevue/button";

const infos = ref([
  { header: "Sarlavha1", date: "15/10/2020 10:30", icon: "fas fa-book" },
  {
    header: "Sarlavha2",
    date: "15/10/2020 14:00",
    icon: "fas fa-book-journal-whills",
  },
  {
    header: "Sarlavha3",
    date: "15/10/2020 16:15",
    icon: "fas fa-book-open-reader",
  },
  { header: "Sarlavha4", date: "16/10/2020 10:00", icon: "fas fa-cube" },
]);
const infos2 = ref([
  {
    header: "Maqsad va vazifalar1",
    date: "15/10/2020 10:30",
    icon: "pi pi-verified",
  },
  {
    header: "Maqsad va vazifalar2",
    date: "15/10/2020 14:00",
    icon: "pi pi-slack",
  },
  {
    header: "Maqsad va vazifalar3",
    date: "15/10/2020 16:15",
    icon: "pi pi-server",
  },
  {
    header: "Maqsad va vazifalar4",
    date: "16/10/2020 10:00",
    icon: " pi pi-sitemap",
  },
]);
</script>

<style lang="scss" scoped>
:deep .p-tabview .p-tabview-nav li .p-tabview-nav-link:focus {
  background-color: transparent;
}

.aboutfond {
  position: relative;
  padding-bottom: 50px;
  &:before {
    content: "";
    width: 100%;
    height: 400px;
    background: rgb(17, 64, 113);
    background: linear-gradient(
      0deg,
      rgba(17, 64, 113, 1) 11%,
      rgba(92, 170, 247, 0) 100%
    );
    position: absolute;
    top: -400px;
    z-index: 444;
  }
}

:deep .p-tabview .p-tabview-nav {
  background: transparent;
  padding: 0 10px;
  justify-content: center;
}

:deep .p-tabview .p-tabview-nav li .p-tabview-nav-link {
  color: white;
  background: transparent;
  padding: 20px 12px;
}

:deep .p-tabview .p-tabview-nav .p-tabview-ink-bar {
  z-index: 1;
  display: block;
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: white;
  transition: 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
:deep .p-tabview .p-tabview-panels {
  background: transparent !important;
  padding: 0px !important;
}

.aboutfond {
  background: rgb(17, 64, 113);
  background: linear-gradient(
    0deg,
    rgba(17, 64, 113, 1) 100%,
    rgba(52, 141, 230, 0.9472163865546218) 100%
  );
}

@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row !important;

      .p-timeline-event-content {
        text-align: left !important;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
    }
  }
}

:deep .p-tabview .p-tabview-nav .p-tabview-ink-bar {
  z-index: 1;
  display: block;
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: white;
  transition: 500ms cubic-bezier(0.35, 0, 0.25, 1);
}

:deep .p-card .p-card-body {
  background: radial-gradient(
    173.3% 173.3% at -8.44% -13.57%,
    rgb(93, 159, 217) 0%,
    rgb(43, 104, 158) 100%
  );
  border-radius: 24px;
}

:deep .p-card {
  background: transparent;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: white;
}
</style>
