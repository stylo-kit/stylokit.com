<template>
  <main class="container mx-auto space-y-10">
    <TestSection title="Badge">
      <Badge variant="brand" size="sm">Brand sm</Badge>
      <Badge variant="brand" size="xs">Brand xs</Badge>
      <Badge variant="gray" size="sm">Gray sm</Badge>
      <Badge variant="gray" size="xs">Gray xs</Badge>
      <Badge variant="square">Square</Badge>
    </TestSection>

    <TestSection title="Badge Icon">
      <div class="flex flex-row items-start gap-4">
        <BadgeIcon variant="brand" size="md">
          <SvgLogo variant="brand" />
        </BadgeIcon>
        <BadgeIcon variant="brand" size="lg">
          <SvgLogo variant="brand" />
        </BadgeIcon>
      </div>
      <div class="flex flex-row items-start gap-4">
        <BadgeIcon variant="gray" size="md">
          <SvgLogo variant="gray" />
        </BadgeIcon>
        <BadgeIcon variant="gray" size="lg">
          <SvgLogo variant="gray" />
        </BadgeIcon>
      </div>
      <div class="flex flex-row items-start gap-4">
        <BadgeIcon variant="diamond" size="md">
          <SvgLogo variant="diamond" />
        </BadgeIcon>
        <BadgeIcon variant="diamond" size="lg">
          <SvgLogo variant="diamond" />
        </BadgeIcon>
      </div>
    </TestSection>

    <TestSection title="Button">
      <div class="flex flex-row items-start gap-4">
        <Button variant="primary" size="sm">
          <span>Button</span>
        </Button>
        <Button variant="primary" size="md">
          <span>Button</span>
        </Button>
        <Button variant="primary" size="lg">
          <span>Button</span>
        </Button>
      </div>
      <div class="flex flex-row items-start gap-4">
        <Button variant="secondary" size="sm">
          <span>Button</span>
        </Button>
        <Button variant="secondary" size="md">
          <span>Button</span>
        </Button>
        <Button variant="secondary" size="lg">
          <span>Button</span>
        </Button>
      </div>
      <div class="flex flex-row items-start gap-4">
        <Button variant="ghost" size="sm">
          <span>Button</span>
        </Button>
        <Button variant="ghost" size="md">
          <span>Button</span>
        </Button>
        <Button variant="ghost" size="lg">
          <span>Button</span>
        </Button>
      </div>
      <div class="flex flex-row items-start gap-4">
        <Button variant="inverse" size="sm">
          <span>Button</span>
        </Button>
        <Button variant="inverse" size="md">
          <span>Button</span>
        </Button>
        <Button variant="inverse" size="lg">
          <span>Button</span>
        </Button>
      </div>
      <div class="flex flex-row items-start gap-4">
        <Button variant="link" size="sm">
          <span>Button</span>
        </Button>
        <Button variant="link" size="md">
          <span>Button</span>
        </Button>
        <Button variant="link" size="lg">
          <span>Button</span>
        </Button>
      </div>
    </TestSection>

    <TestSection title="Icon Button">
      <IconButton variant="primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z"
          />
          <path
            fill-rule="evenodd"
            d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </IconButton>
      <IconButton variant="secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z"
          />
          <path
            fill-rule="evenodd"
            d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </IconButton>
    </TestSection>

    <TestSection title="Logo Brand">
      <LogoBrand />
      <LogoBrand :symbol="true" />
    </TestSection>

    <TestSection title="Menu Button">
      <MenuButton />
      <MenuButton :open="true" />
    </TestSection>

    <TestSection title="Section Heading">
      <SectionHeading buttonText="Explore all">New Releases</SectionHeading>
    </TestSection>

    <TestSection title="Menu Item">
      <div class="w-full grid grid-cols-4 gap-4">
        <MenuItem to="#" icon="heroicons:clock-solid">Discover</MenuItem>
        <MenuItem to="/test" icon="heroicons:clock-solid">Discover</MenuItem>
      </div>
    </TestSection>

    <TestSection title="Text Input">
      <TextInput />
    </TestSection>

    <TestSection title="Search Input">
      <SearchInput />
    </TestSection>

    <TestSection title="Search Result">
      <SearchResult>
        <SearchResultItem
          title="Nexus AI"
          desc="/templates/nexus-ai"
          to="/templates"
        />
        <SearchResultItem
          title="Nexus AI"
          desc="/templates/nexus-ai"
          to="/templates"
        />
        <SearchResultItem
          title="Nexus AI"
          desc="/templates/nexus-ai"
          to="/templates"
        />
        <SearchResultItem
          title="Nexus AI"
          desc="/templates/nexus-ai"
          to="/templates"
        />
        <SearchResultItem
          title="Nexus AI"
          desc="/templates/nexus-ai"
          to="/templates"
        />
        <SearchResultItem
          title="Nexus AI"
          desc="/templates/nexus-ai"
          to="/templates"
        />
        <SearchResultItem
          title="Nexus AI"
          desc="/templates/nexus-ai"
          to="/templates"
        />
      </SearchResult>
    </TestSection>

    <TestSection title="Submit Button">
      <SubmitButton>Submit</SubmitButton>
      <SubmitButton :loading="true">Submit</SubmitButton>
    </TestSection>

    <TestSection title="Submit Form">
      <div class="w-full grid grid-cols-3 gap-4">
        <SubmitForm />
        <SubmitForm :loading="true" />
        <SubmitForm :success="true" />
      </div>
    </TestSection>

    <TestSection title="Pricing Card">
      <div class="w-full grid grid-cols-3 gap-10">
        <PricingCard
          variant="pro"
          title="Pro tier"
          desc="Premium access"
          price="$19"
          :features="[
            'Priority Support',
            'Exclusive Content',
            'Early Access',
            'VIP Events',
            'Pro Features',
          ]"
        />
        <PricingCard
          variant="elite"
          title="Elite tier"
          desc="Premium access"
          price="$19"
          :features="[
            'Priority Support',
            'Exclusive Content',
            'Early Access',
            'VIP Events',
            'Pro Features',
          ]"
        />
        <PricingCard
          variant="diamond"
          title="Diamond tier"
          desc="Premium access"
          price="$19"
          :features="[
            'Priority Support',
            'Exclusive Content',
            'Early Access',
            'VIP Events',
            'Pro Features',
          ]"
        />
      </div>
    </TestSection>

    <TestSection title="Default Card">
      <div class="w-full flex flex-row flex-wrap items-start gap-10">
        <Card
          title="Title"
          to="https://google.com"
          image="https://framerusercontent.com/images/3jqV0sBc8WOSj3O2ma8xL6sgW0.webp"
        >
        </Card>

        <Card
          title="Title"
          to="https://google.com"
          image="https://framerusercontent.com/images/3jqV0sBc8WOSj3O2ma8xL6sgW0.webp"
          badge="NEW"
        >
        </Card>

        <Card
          title="Title"
          to="https://google.com"
          image="https://framerusercontent.com/images/3jqV0sBc8WOSj3O2ma8xL6sgW0.webp"
          desc="Category"
          badge="NEW"
        >
        </Card>

        <Card
          title="Title"
          subtitle="$69"
          to="https://google.com"
          image="https://framerusercontent.com/images/3jqV0sBc8WOSj3O2ma8xL6sgW0.webp"
          desc="Category"
          badge="NEW"
        >
        </Card>
      </div>
    </TestSection>

    <TestSection title="Featured Card">
      <div class="w-full flex flex-row flex-wrap items-start gap-10">
        <FeaturedCard
          title="Framer"
          desc="The internet is your canvas."
          to="https://google.com"
          image="https://framerusercontent.com/images/3jqV0sBc8WOSj3O2ma8xL6sgW0.webp"
        >
        </FeaturedCard>
      </div>
    </TestSection>

    <TestSection title="Pricing Tab">
      <PricingTabGroup>
        <PricingTab>Monthly</PricingTab>
        <PricingTab
          >Yearly
          <span class="body-2 text-brand-5">(Save 45%)</span></PricingTab
        >
      </PricingTabGroup>
    </TestSection>

    <TestSection title="Sidebar">
      <div class="grid grid-cols-3">
        <Sidebar>
          <SidebarBody>
            <NuxtLink to="/">
              <LogoBrand />
            </NuxtLink>

            <SidebarContent>
              <SearchInput />

              <SidebarMenu>
                <MenuItem icon="heroicons:clock-solid">Discover</MenuItem>
                <MenuItem icon="heroicons:information-circle-solid"
                  >Info</MenuItem
                >
                <MenuItem icon="heroicons:banknotes-solid">A Sponsor</MenuItem>
              </SidebarMenu>

              <div class="flex flex-col gap-4">
                <Divider label="SOURCE" />
                <SidebarMenu>
                  <MenuItem icon="heroicons:fire-solid">Inspirations</MenuItem>
                  <MenuItem icon="heroicons:document-duplicate-solid"
                    >Templates</MenuItem
                  >
                  <MenuItem icon="heroicons:ellipsis-horizontal-solid"
                    >Design Systems</MenuItem
                  >
                  <MenuItem icon="heroicons:newspaper-solid"
                    >Premium UI Kits</MenuItem
                  >
                  <MenuItem icon="heroicons:queue-list-solid">Icons</MenuItem>
                  <MenuItem icon="heroicons:language-solid"
                    >Typography</MenuItem
                  >
                  <MenuItem icon="heroicons:rocket-launch-solid"
                    >Design Tools</MenuItem
                  >
                </SidebarMenu>
              </div>
            </SidebarContent>
          </SidebarBody>
          <SidebarFooter>© 2024 Made by Dmytri</SidebarFooter>
        </Sidebar>
      </div>
    </TestSection>

    <TestSection title="Pricing Switch">
      <PricingSwitch />
      <PricingSwitch label="Monthly" labelEnabled="Yearly" />
      <PricingSwitch
        label="Monthly"
        labelEnabled="Yearly"
        badgeLabel="(Save 45%)"
      />
    </TestSection>

    <TestSection title="Test"> </TestSection>
  </main>
</template>

<script setup lang="ts"></script>
