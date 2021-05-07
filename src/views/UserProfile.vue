<template>
  <div v-if='userProfile'>
    <div class='row user-profile'>
      <div class='col s12 user-profile_content'>
        <div class='user-profile_content_top'>
          <div class='user-profile_content_top_username'>
            <div class='user-profile_content_top_username_title'>{{ userProfile.username }}</div>
            <div>Пользователь</div>
          </div>

          <router-link v-if='isCurrentUserProfile' v-bind:to='{ name: "settings" }' class='user-profile_content_top_btn'>Настройки профиля</router-link>
        </div>

        <div class='user-profile_content_bottom'>
          <div class='user-profile_content_bottom_tabs'>
            <div class='user-profile_content_bottom_tabs_links'>
              <div class='user-profile_content_bottom_tabs_links_item'>
                <router-link class='user-profile_content_bottom_tabs_links_item_link' v-bind:to='{ name: "userProfile", params: { slug: userProfile.username } }' v-bind:class='{ active: routName === "userProfile" }'>любимые статьи</router-link>
              </div>

              <div class='user-profile_content_bottom_tabs_links_item'>
                <router-link class='user-profile_content_bottom_tabs_links_item_link' v-bind:to='{ name: "userProfileFavorites", params: { slug: userProfile.username } }' v-bind:class='{ active: routName === "userProfileFavorites" }'>опубликованные статьи</router-link>
              </div>
            </div>

            <hcv-feed v-bind:api-url='apiUrl'></hcv-feed>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import HcvFeed from '@/components/Feed';

export default {
  name: 'HcvUserProfile',
  components: { HcvFeed },
  computed: {
    ...mapState({
      isLoading: state => state.userProfile.isLoading,
      error: state => state.userProfile.error,
      userProfile: state => state.userProfile.data
    }),
    ...mapGetters({
      currentUser: 'currentUser'
    }),
    isCurrentUserProfile() {
      if (!this.currentUser || !this.userProfile) {
        return false;
      }
      return this.currentUser.username === this.userProfile.username;
    },
    apiUrl() {
      const isFavorites = this.$route.path.includes('favorites');
      return isFavorites ? `/articles?author=${this.userProfileSlug}` : `/articles?favorited=${this.userProfileSlug}`;
    },
    userProfileSlug() {
      return this.$route.params.slug;
    },
    routName() {
      return this.$route.name;
    }
  },
  watch: {
    userProfileSlug() {
      this.getUserProfile();
    }
  },
  mounted() {
    this.getUserProfile();
  },
  methods: {
    getUserProfile() {
      this.$store.dispatch('getUserProfile', { slug: this.userProfileSlug });
    }
  }
};
</script>

<style scoped lang='sass'>
  .user-profile
    &_content
      margin: 50px 0
      &_top
        display: flex
        justify-content: space-between
        margin-bottom: 50px
        &_username
          display: flex
          flex-direction: column
          font-size: 18px
          &_title
            color: $link-color
        &_btn
          display: inline-block
          max-height: 45px
          padding: 10px
          color: $clear
          background-color: $btn-color
          border-radius: 5px
          transition: all .25s ease-in-out
          &:hover
            opacity: .9
      &_bottom
        &_tabs
          &_links
            display: flex
            flex-wrap: wrap
            padding-bottom: 10px
            margin-bottom: 50px
            border-bottom: 1px solid $base-text
            &_item
              margin-right: 15px
              &_link
                color: $base-text
                font-size: 24px
                transition: all .25s ease-in-out
                &:hover
                  color: $link-color
                  opacity: .9
                &.active
                  color: $link-color
                  background-color: transparent
                  padding-bottom: 12px
                  border-bottom: 4px solid $link-color
</style>
