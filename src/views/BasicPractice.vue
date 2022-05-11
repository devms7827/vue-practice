<template>
  <div class="basic-page">
    <ul class="list-group">
      <li class="list-group-item mb-5">
        <BasicRouting />
      </li>

      <li class="list-group-item mb-5">
        <FetchingDataFromServer />
      </li>

      <li class="list-group-item mb-5">
        <ListRendering />
      </li>

      <li class="list-group-item mb-5">
        <ConditionalRendering />
      </li>

      <li class="list-group-item mb-5">
        <BasicFormHandling />
      </li>

      <li class="list-group-item mb-5">
        <EventHandlingWithParameter />
      </li>

      <li class="list-group-item mb-5">
        <BasicEventHandling />
      </li>

      <li class="list-group-item mb-5">
        <StaticStateComponent />
      </li>

      <li class="list-group-item mb-5">
        <StaticPropComponent
          name="Manas Soni"
          age="25"
          designation="Software Engineer"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import StaticPropComponent from "@/components/StaticPropComponent.vue";
import StaticStateComponent from "@/components/StaticStateComponent.vue";
import BasicEventHandling from "@/components/BasicEventHandling.vue";
import EventHandlingWithParameter from "@/components/EventHandlingWithParameters.vue";
import BasicFormHandling from "@/components/BasicFormHandling.vue";
import ConditionalRendering from "@/components/ConditionalRendering.vue";
import ListRendering from "@/components/ListRendering.vue";
import FetchingDataFromServer from "@/components/FetchingDataFromServer.vue";
import BasicRouting from "@/components/BasicRouting.vue";

export default {
  name: "BasicPractice",
  components: {
    StaticPropComponent,
    StaticStateComponent,
    BasicEventHandling,
    EventHandlingWithParameter,
    BasicFormHandling,
    ConditionalRendering,
    ListRendering,
    FetchingDataFromServer,
    BasicRouting,
  },
};
</script>

<style scoped>
.basic-page {
  text-align: left;
}
</style>
